import { Router } from "express";
import { UserController } from "../controllers/userController";
import { body } from "express-validator";
import { UserValidator } from "../validator/validator";


class UserRoutes{

    public routes: Router;

    constructor(){
        this.routes = Router()
        this.getRoutes()
        this.postRoutes()
        this.patchRoutes()
        this.putRoutes()
        this.deleteRoutes()
    }

    getRoutes(){
        this.routes.post('/login',UserValidator.signup() ,UserController.login)

        this.routes.get('/login2', (req, res) => {
            res.send('login2')
        })
    }
    postRoutes(){}
    patchRoutes(){}
    putRoutes(){}
    deleteRoutes(){}
}

export default new UserRoutes().routes