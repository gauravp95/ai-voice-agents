import express from 'express';
import { healthCheck } from '../../controllers/health.controller.js';
import { createCall } from '../../controllers/voice.controller.js';
import { errorHandler } from '../../middlewares/error.middleware.js';

const router = express.Router();

router.get('/health', healthCheck);

router.post('/voice-call', createCall, errorHandler);

export default router;
