// src/ index.js 
import dotenv from 'dotenv';
dotenv.config({ path: '/.env' })
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';

connectDB()