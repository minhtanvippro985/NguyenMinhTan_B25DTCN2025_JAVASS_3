console.log("Ngu day");
console.log("danh rang");
console.log("di hoc");
console.log("an trua");


let boolvalue = true



for ( let i = 0 ; i <= 7 ; i = i + 1 ){
    console.log(`i love you ${i}`);
    console.log("1");
   
    if ( i == 6 ){
        console.log("asdasasdasd")
        break;
    }

}

for (let i = 1 ; i <= 3; i++ ){
    for (let j = 1 ; j <= 2 ; j ++){
        console.log(`outer loop ${i} , inner loop ${j}`);
    }
}



for ( let j = 1 ; j <= 4 ; j++ ){
    console.log(j, "Outer loop");
    for (let i = 1 ; i <= 7 ; i++){
        console.log(" ", i , "Inner loop");
    }
}