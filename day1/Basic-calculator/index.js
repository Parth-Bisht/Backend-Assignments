let command = process.argv[2];
const rand = require("crypto");

if(command==="add"){
    const sum = Number(process.argv[3])+Number(process.argv[4])
    console.log(sum);
}
else if(command === "sub"){
    const diff = Number(process.argv[3])-Number(process.argv[4]);
    console.log(diff);
}
else if(command === "mult"){
    const pro = Number(process.argv[3])*Number(process.argv[4]);
    console.log(pro);
}
else if(command === "divide"){
    const ans = Number(process.argv[3])/Number(process.argv[4]);
    console.log(ans);
}
else if(command === "sin"){
    const ans = Math.sin(Number(process.argv[3]));
    console.log(ans);
}
else if(command === "cos"){
    const ans = Math.cos(Number(process.argv[3]));
    console.log(ans);
}
else if(command === "tan"){
    const ans = Math.tan(Number(process.argv[3]));
    console.log(ans);
}
else if(command === "random"){
    console.log(rand.randomInt(0,1000));
}