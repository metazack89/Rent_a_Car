import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

async function connectDB() {
  if (globalThis.mongo) {
    if (globalThis.mongo.isConnected) {
      console.log('Using existing MongoDB connection');
      return;
    }
    await globalThis.mongo.promise;
    return;
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) throw new Error('MONGO_URI no está definido en .env');

  const connectionPromise = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  globalThis.mongo = {
    isConnected: false,
    promise: connectionPromise,
  };

  await connectionPromise;
  globalThis.mongo.isConnected = true;
  console.log('MongoDB connected');
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('DB connection error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);

export default app;
