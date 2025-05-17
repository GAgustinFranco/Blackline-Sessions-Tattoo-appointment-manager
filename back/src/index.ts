import {ENV} from "./config/envs";
import app from "./server";

app.listen(ENV, () => {
    console.log(`Server up and running on port: http://localhost:${PORT}`)
})