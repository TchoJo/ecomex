const connectDB = require('./config/dbContext');
const express = require('express');
const cors = require('cors');

const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter');

const app = express();
const port = 8000;

connectDB;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

app.listen(port, () => {
    console.info(`Server is up @ http://127.0.0.1:8000 
                    api : 
                    users = http://127.0.0.1:8000/api/users
                    products = http://127.0.0.1:8000/api/products`);
});