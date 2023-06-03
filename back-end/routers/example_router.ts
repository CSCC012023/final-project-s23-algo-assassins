import { Router } from "express";

import { User } from '../models/exampleUser';
export const exampleRouter = Router();

exampleRouter.get('/', async (req, res) => {
    res.send('Hello from example router');
});

exampleRouter.post('/adduser', async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        age: req.body.age,
    });
    user.save()
        .then( (data: any) => {
            res.json(data);
        })
        .catch( (err : any) => {
            res.json({message: err});
        });
});

exampleRouter.get('/getuser', async (req, res) => {
    const name = req.query.name;
    User.findOne({name: name})
        .then( (data: any) => {
            res.json(data._id.toString());
        })
        .catch( (err: any) => {
            res.json({message: err});
        });
    
});

// check login 
exampleRouter.post('/login', async (req, res) => {
    // user input
    console.log("Received Login Request");
    const email = req.body.email;
    const password = req.body.password;

    console.log("input email: " + email);
    console.log("input password: ", password);
    User.findOne({email: email})
        .then( (data: any) => {
        // console.log(data);
        // console.log("Stored password: ", data.password);
        // console.log("Stored name: ", data.name);
        //console.log("Received");
        //console.log("stoered email: " + data.email + "input email: " + email)
        // console.log("Stored email: ", data.email);
        // console.log("Stored age: ", data.age);
        // console.log("Stored weight: ", data.weight);
        // console.log("Stored height: ", data.height);
        // console.log("Stored _v: ", data.__v);
        // console.log("stored password: " + data.password + ", input password: " + password);
            if (data.password == password) {
                // return object ID
                res.json({ success: true});
            }
            else {
                // wrong password
                res.json({ success: false});
            }
        })
        .catch( (err: any) => {
            // invalid email
            console.log("Error in receving req");
            res.json({message: err});
        });

});
  