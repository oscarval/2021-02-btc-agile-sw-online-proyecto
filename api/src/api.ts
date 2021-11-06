import express, { json, urlencoded } from "express";
import cors from "cors";
// Routes
import productRouters from "./routes/products";

const port: number = 3000; // default port to listen


// Moongose init DB
import { Connect } from "./config/mongoose";
const connectDB = async () => {
    console.log('init connect')
    const cn = new Connect();
    await cn.init();
}
connectDB();

// Express
const app = express();

// enabled cors
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// set Routes
app.use('/products', productRouters);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

// start the Express serverƒ
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

