const { Router } = require('express');
const Article = require('../../models/articledata');

const router = Router();

//------------ get all article ----------------

router.get('/', async (req, res) => {
    try{
        const articles = await Article.find();
        if(!articles) throw new Error('No articles to display Err !');
        const sorted =  articles.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ get My articles ----------------

router.get('/myarticles/:id', async (req, res) => {
    const { id } = req.params
    try{
        const myArticles = await Article.find({creator : id});
        if(!myArticles) throw new Error('No articles to display Err !');
        const mysorted =  myArticles.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(mysorted);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});


//------------ get one article ----------------

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try{
        const onearticle = await Article.findById(id);
        if(!onearticle) throw new Error('No news to display Err !');
        res.status(200).json(onearticle);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ create an article ------------------

router.post('/', async (req, res) =>{
    const newArticle = new Article(req.body);
    try{
        const articlecreate = await newArticle.save();
        if(!articlecreate) throw new Error('article creation opperation failed !');
        res.status(200).json(articlecreate);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//--------------- edit article ---------------------
// we can edit the article text only or all the article we will see ?

// in devolopment done when in use

//--------------- delete article --------------------

router.delete('/:id', async (req, res) =>{
    try{
        const { id } = req.params
        const delArticle = await Article.findByIdAndDelete(id);
        if(!delArticle) throw new Error('Article deletion not done !');
        res.status(200).json(delArticle);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//------------ export module ---------------
module.exports = router;
