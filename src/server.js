import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ message: 'hello' });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'ok' });
});

app.post('/repeat/:title', (req, res) => {
  res.send({
    message_received: {
      title: req.params.title,
      body: req.body
    }
  });
});

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000');
  });
};
