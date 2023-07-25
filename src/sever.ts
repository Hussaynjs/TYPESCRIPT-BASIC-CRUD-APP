import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import { getEnviromentVariables } from './Enviroment/Enviroment'
import userRouter from './Routes/userRouter'

export class Server{
    public app: express.Application = express()

    constructor(){
        this.setConfiqs()
        this.setRoutes()
        this.notFoundErrorMiddleware()
        this.errohHandlerMiddleware()

    }

    setConfiqs(){
        this.connectDB()
        this.confiqureBodyParser()
    }
    setRoutes(){
        this.setUserRoutes()
    }


    setUserRoutes(){
        this.app.use('/api/v1/user', userRouter)
    }

    connectDB(){
        mongoose.connect(getEnviromentVariables().db_uri)
        .then(() => console.log('db connected'))
        .catch(() => console.log('unable to connect'))
    }
    
    confiqureBodyParser(){
        this.app.use(bodyParser.urlencoded({
            extended: true
        }))
    }

    notFoundErrorMiddleware(){
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'not found'
            })
        })
    }

    errohHandlerMiddleware(){
        this.app.use((error,req, res, next ) => {
            const errorStatus = req.errorStatus || 500

            res.status(errorStatus)
            .json({
                message: error.message || 'opps something went wrong'
            })
        })
    }
}
