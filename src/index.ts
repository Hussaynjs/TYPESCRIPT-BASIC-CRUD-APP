import { Server } from "./sever";

const server = new Server().app

const port = 5000;

server.listen(port, () => {
    console.log(`app is up and runnig on port ${port}....`)
})