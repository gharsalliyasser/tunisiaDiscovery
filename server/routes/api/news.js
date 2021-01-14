const { Router } = require('express');
const News = require('../../models/newsdata');

const router = Router();

//------------ get all news ----------------

router.get('/', async (req, res) => {
    try{
        const news = await News.find();
        if(!news) throw new Error('No news to display Err !');
        const sorted =  news.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ get one news ----------------

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try{
        const onenews = await News.findById(id);
        if(!onenews) throw new Error('No news to display Err !');
        res.status(200).json(onenews);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ create an news ------------------

router.post('/', async (req, res) =>{
    const newNews = new News(req.body);
    try{
        const newsCreate = await newNews.save();
        if(!newsCreate) throw new Error('news creation opperation failed !');
        res.status(200).json(newsCreate);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//--------------- edit news ---------------------
// we can edit the news text only or all the news we will see ?

// in devolopment done when in use

//--------------- delete news --------------------

router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const deleteNews = await News.findByIdAndDelete(id);
        if(!deleteNews) throw new Error('news deletion not done !');
        res.status(200).json(deleteNews);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ export module ---------------
module.exports = router;
