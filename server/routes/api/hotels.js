const { Router } = require('express');
const Hotel = require('../../database/db');
const router = Router();

router.get('/', async (req, res) => {
    try{
        const hotels = await Hotel.find();
        if(!hotels) throw new Error('No hotels to display Err !');
        res.status(200).json();
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});