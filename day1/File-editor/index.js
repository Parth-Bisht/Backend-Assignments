let [node,file,command,fileName,...args] = process.argv;
const fs = require("fs");

if(command==="write"){
    fs.writeFile(fileName,args.join(" "),{encoding:"utf-8"},(err,data)=>{
        if(err) console.log(err);
        else console.log("Done")
    })
}
else if(command==="read"){
    fs.readFile(fileName,{encoding:"utf-8"},(err,data)=>{
        if(err) console.log(err);
        else console.log(data)
    })
}
else if(command==="delete"){
   fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log(`${fileName} was deleted`);
  });
}
else if(command==="append"){
   fs.appendFile(fileName, args.join(" "), (err) => {
    if (err) throw err;
    console.log(`${args.join(" ")} was appended to file!`);
  });
}
else if(command==="rename"){
   fs.rename(fileName, args[0], (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
}