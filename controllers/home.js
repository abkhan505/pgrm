module.exports = {
    getIndex: (req,res)=>{
        /* res.render('index.ejs') */
        res.sendFile(__dirname + '/index.html')
    }
}