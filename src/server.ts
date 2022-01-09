import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import cors from "cors"
const port = config.get("port") as number;
const host = config.get("host") as string;

import gameRoutes from "./routes/gameRoutes";
import collectionRoutes from './routes/collectionRoutes'
import vocherRoutes from './routes/vocherRoutes'
import userRoutes from "./routes/userRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);
    connect();
    app.use("/api/games", gameRoutes)
    app.use("/api/collections", collectionRoutes)
    app.use("/api/vochers", vocherRoutes)
    app.use("/api/users", userRoutes)
    app.use("/api/carts", cartRoutes)
    app.use("/api/orders", orderRoutes)

});