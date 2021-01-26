const { Router } = require('express');
const  events = require('../../models/Events');

const router = Router();

router.post('/events', async (req,res)=> {
    console.log (req.body)
    const { title, image, description, youtubeLink,dateevents } = req.body;
        let event = {};
        event.title = req.body.title;
        event.image = req.body.image;
        event.description = req.body.description;
        event.youtubeLink = req.body.youtubeLink;
        event.dateevents = req.body.dateevents;
        console.log(events.title)
        let eventModel = new events(event);
        await eventModel.save();
        res.json(eventModel);
        
    
 });
 router.get('/allevents', async(req, res) => {
    try {
        const event = await events.find();
        if (!event) throw new Error('No cars to display Err !');
        const sorted = event.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
 
    module.exports = router;