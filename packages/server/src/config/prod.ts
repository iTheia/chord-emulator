import dotenv from 'dotenv';
dotenv.config();

export const prod = {
	port: process.env.PORT || 5050,
};
