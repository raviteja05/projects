const express=require('express');
const path=require('path')
const bodyParser=require('body-parser')
const app=express()
const fetchVideo=require('./fetchVideo')

const publicViewDirPath=path.join(__dirname,'../public/views')
const staticDirPath=path.join(publicViewDirPath,'../static')
app.use(express.static(staticDirPath))
app.use("/videos", express.static(fetchVideo.videoDirectory));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.set('views', publicViewDirPath);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/initialize',(req,res)=>{
    fetchVideo.callReadFilesInSync();
    res.render("index",{data:"done"});
    
})
app.get('/videos',(req,res)=>{

    console.log(req.query)
    fetchVideo.fetchAllVideos(req.query.collection,res,req.query.pageNo,req.query.nrpp);

    

})

app.get('/tree',(req,res)=>{
    console.log(req.query.dir)
if(req.query.dir){
    fetchVideo.readEachFolder(req.query.dir,res);
}
else{
    fetchVideo.readAllFolders(res);
}
    

    

})



app.listen(3002,()=>console.log('starting server at port'));