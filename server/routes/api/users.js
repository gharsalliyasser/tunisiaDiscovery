const { Router } = require('express');
const Userdata = require('../../models/userdata');

const router = Router();
//------------------ get pending auther users -----------

router.get('/', async (req, res) => {
    try{
        const pendingUsers = await Userdata.find({autherRequest: "pending"});
        if(!pendingUsers) throw new Error('Err problrm with finding user pending !');
        res.status(200).json(pendingUsers);
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//------------------ SingUp process ---------------------

router.post('/signup', async (req, res) =>{
    const newUser = new Userdata(req.body);
    try{
        const user = await newUser.save();
        if(!user) throw new Error('saving not done !')
        res.status(200).json(user)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//------------------ SingIn process ---------------------

router.post('/signin', async (req, res) =>{
    const entrie = req.body;
    try{
        const compare = await Userdata.findOne({useremail : entrie.useremail})
        if(!compare) throw new Error('signin opperation not done !')
        let confirmation = false;
        if(compare.password === entrie.password){
            confirmation = true;
            res.status(200).json(compare);
        } else{
            res.send(confirmation)
        }
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//------------------ Auther Request pending user can do that -----------------

router.put('/autherqst/:id', async (req, res)=>{
    const { id } = req.params
    try{
        const pending = await Userdata.findByIdAndUpdate( id, { autherRequest : "pending" });
        if(!pending) throw new Error('pending request obstructed !');
        res.status(200).json(pending);
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
});

//------------------ Auther Request accepted admin role only ---------------

router.put('/autheraccpt/:id', async (req, res)=>{
    const { id } = req.params
    try{
        const accepted = await Userdata.findByIdAndUpdate( id, { autherRequest : "auther" });
        if(!accepted) throw new Error('acception request not done !');
        res.status(200).json(accepted);
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
});

//------------------ Auther Request denied admin role only -----------------

router.put('/autherdenied/:id', async (req, res)=>{
    const { id } = req.params
    try{
        const denied = await Userdata.findByIdAndUpdate( id, { autherRequest : "none" });
        if(!denied) throw new Error('auther Request denied not done !');
        res.status(200).json(denied);
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
});

module.exports = router;