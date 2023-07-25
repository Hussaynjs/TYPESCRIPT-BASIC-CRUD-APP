import User from "../Models/User";

import {validationResult} from 'express-validator'

export class UserController {

    static login (req, res, next) {
        // const data = [{name: "hussayn", id: 1}]
        // res.send(data)
      // const error = new Error('email and password is needed')
        // next(error)
  //    res.send(req.query)
        //res.send(req.body)

        const errors = validationResult(req)
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if(!errors.isEmpty){
            return res.status(400).json({errors: errors.array().map((x) => x.msg)})
        }

       const user = new User({
        email,
        password
       })
 user.save()
 .then((user) => res.send(user))
 .catch((e) => res.send(e))

    }

}