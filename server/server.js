import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

let isConnected = false;
async function initDB() {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log('MongoDB connected');
    } catch (error) {
      console.error('DB connection error:', error);
    }
  }
}

app.get('/', async (req, res) => {
  await initDB();
  res.send('Server is running');
});

app.use(
  '/api/user',
  async (req, res, next) => {
    await initDB();
    next();
  },
  userRouter
);

app.use(
  '/api/owner',
  async (req, res, next) => {
    await initDB();
    next();
  },
  ownerRouter
);

app.use(
  '/api/bookings',
  async (req, res, next) => {
    await initDB();
    next();
  },
  bookingRouter
);

export default app;
