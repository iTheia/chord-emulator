import dotenv from 'dotenv';
dotenv.config();

export const dev = {
	port: process.env.DEV_PORT || 5050,
};
