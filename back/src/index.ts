import {PORT} from "./config/envs";
import app from "./server";
import "reflect-metadata"

app.listen(PORT, () => {
    console.log(`Server up and running on port: http://localhost:${PORT}`)
})