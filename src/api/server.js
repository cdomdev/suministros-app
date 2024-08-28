import express from 'express'; 
import { handler as ssrHandler } from '../../dist/server/entry.mjs';
import { productosFalsos } from './dataPrueba.js';

const app = express();
const PORT = 3000;

app.get('/api/productos', (req, res) => {
    res.json(productosFalsos);
});

app.use(ssrHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});