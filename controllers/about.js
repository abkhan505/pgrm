module.exports = {
    getAbout: (req,res)=>{
        /* res.render('index.ejs') */
        res.sendFile('about.html')
    }
}