import { body } from 'express-validator'

export class UserValidator {
    static signup(){
        return [
            body('name', 'name is required').isString(),
            body('email', 'email is required').isEmail(),
            body('password', 'password is required').isLength({min: 5})
            .custom((value, {req}) => {
                if(req.body.email) return
                else{
                    throw new Error('please provide a genuine email')
                }
            })
        ]
    }
}