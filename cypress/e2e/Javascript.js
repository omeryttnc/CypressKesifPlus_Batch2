// const names = ["omer ali", "kesif plus","mustafa bey"]

// names.split(" ")[0]


const fs = require('fs')

fs.readdir("cypress/downloads/",(err,files)=>{

    if(err) throw err;

    files.forEach((file)=>{
        console.log(file);
        fs.unlink("cypress/downloads/"+file,(err)=>{
            if(err) throw err;
        })
    })
})