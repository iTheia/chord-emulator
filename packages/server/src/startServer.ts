import express from 'express';
import { createServer } from 'http';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';

export const startServer = async () => {
	const app = express();
	const server = createServer(app);
	const corsOptions = {
		credentials: true,
		origin: '*',
	};
	app.use(cors(corsOptions));
	app.use(helmet());

	server.listen(config.port);
};
