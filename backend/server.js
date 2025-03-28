// CONFIGURAÇÕES GERAIS
import express from 'express';
import cors from 'cors';


const app = express();
app.listen(5000, '0.0.0.0', () => {
    console.log('Server is running on');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

