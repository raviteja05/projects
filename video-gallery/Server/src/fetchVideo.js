const fs=require('fs');
const path=require('path');
const db=require('./dbservice')


const propertiesReader=require('properties-reader');

var properties = propertiesReader(path.join(__dirname,'../application.properties'));

var videoDirectory=properties.get('videos.dir');

const readDirectory=()=>{   
    
    readFilesInDirectory(videoDirectory);    
}

const callReadFilesInSync=()=>{
    readFilesInSync(videoDirectory);
}
const readFilesInSync=(dir)=>{
   var contents=fs.readdirSync(dir,'utf-8');
  contents.forEach((content)=>{
       
       if(path.extname(content).toLowerCase() === ".mp4"){
        var videoObj={
            name:content,
            path:path.join("/videos/"+path.basename(dir),"/",content),
            parentDir: dir    
        }  
       
       db.insertData("videos",videoObj);               
    }      
    
    var subDir=fs.lstatSync(path.join(dir,"/",content));
    if(subDir.isDirectory()){
        readFilesInSync(path.join(dir,"/",content));
    }  
});  
    
}

const readFilesInDirectory=(dir)=>{    
   
    fs.readdir(dir,(err,files)=>{        
        if(err)console.log(err);
        
    files.forEach(file=>{
        if(path.extname(file).toLowerCase() === ".mp4"){
            var videoObj={
                name:file,
                path:path.join("/videos/"+path.basename(dir),"/",file),
                parentDir: dir    
            }  
            
            db.insertData("videos",videoObj);               
        }        
              
        fs.lstat(path.join(dir,"/",file),(err,stats)=>{
            if(err){
                console.log(err);                
            }
            if(stats.isDirectory()){
                readFilesInDirectory(path.join(dir,"/",file));
            }
        });
       
            
        });
        
    });

    return;
    
    

}

const fetchAllVideos=(collection,res,pageNo,nrpp)=>{
    db.getAllVideos(collection,res,pageNo,nrpp);
}

const readAllFolders=(res)=>{
    var list=[]
    var contents=fs.readdirSync(videoDirectory);
    contents.forEach(content=>{
        if(fs.lstatSync(path.join(videoDirectory,"/",content)).isDirectory()){
            list.push(content);
        }
    });
    res.json(list);
}

const readEachFolder=(subdir,res)=>{
    var list=[]
    var contents=fs.readdirSync(path.join(videoDirectory,"/",subdir));
    contents.forEach(content=>{
        if(!fs.lstatSync(path.join(videoDirectory,"/",subdir,"/",content)).isDirectory()){
            if(path.extname(content).toLowerCase()==='.mp4'){
            var videoObj={
                name:content,
                path:path.join("/videos/"+path.basename(subdir),"/",content),
                parentDir: videoDirectory  
            }
            list.push(videoObj);
        }
            
        }
    });
    res.json(list);
}



   
    
       
  

module.exports={readDirectory,fetchAllVideos,videoDirectory,callReadFilesInSync,readAllFolders,readEachFolder}
