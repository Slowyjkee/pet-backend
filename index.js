import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/user'
import chatRoute from './routes/chat'
import petRoute from './routes/pet'

import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:3000', 'http://localhost:3001'], credentials: true}));
app.use(express.static(`${__dirname}/public`));


app.use('/api/v1/user', usersRoute);
app.use('/api/v1/chat', chatRoute);
app.use('/api/v1/pet', petRoute);

app.get('/',(req,res) => {
    res.send("Hello Babel")
});

export default app;
