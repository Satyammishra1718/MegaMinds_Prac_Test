import express from 'express';
import taskRoutes from './tasks.js'; 
import authRoutes from './auth.js';

const router = express.Router();

router.use('/task', taskRoutes);
router.use('/auth',authRoutes)

export default router;
