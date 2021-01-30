const { Router } = require("express");
const db = require("../../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = Router();

//------------------ SingUp process ---------------------

router.post("/signup", async(req, res) => {
    const newUser = new db({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        select: req.body.select,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    try {
        await newUser.save();
        return res.status(200).json({
            title: "signup success",
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            title: "error",
            error: "email in use",
        });
    
    }
});

//------------------ SingIn process ---------------------

router.post("/signin", (req, res) => {
    db.findOne({ email: req.body.email }, (err, user) => {
        if (err)
            return res.status(500).json({
                title: "server error",
                error: err,
            });
        if (!user) {
            return res.status(401).json({
                title: "user not found",
                error: "invalid credentials",
            });
        }
        //incorrect password
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                tite: "login failed",
                error: "invalid credentials",
            });
        }
        //IF ALL IS GOOD create a token and send to frontend
        let token = jwt.sign({ userId: user._id }, "shuuuu");
        return res.status(200).json({
            title: "login sucess",
            token: token,
            user: user,
        });
    });
});

// -------------- get user --------------------

router.get("/user", (req, res) => {
    let token = req.headers.token; //token
    jwt.verify(token, "shuuuu", (err, decoded) => {
        if (err)
            return res.status(401).json({
                title: "unauthorized",
            });
        //token is valid
        db.findOne({ _id: decoded.userId }, (err, user) => {
            if (err) return console.log(err);
            return res.status(200).json({
                title: "user grabbed",
                user: {
                    email: user.email,
                    name: user.name,
                },
            });
        });
    });
});

module.exports = router;