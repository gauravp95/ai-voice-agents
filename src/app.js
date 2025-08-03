import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import 'express-async-errors';

import { errorHandler } from './middlewares/error.middleware.js';
import v1Routes from './routes/v1/index.js';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate Limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
}));

// API Routes
app.use('/api/v1', v1Routes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Error Handler
app.use(errorHandler);

export default app;
