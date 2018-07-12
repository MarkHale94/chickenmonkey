
for (let i=1; i<=100; i++){
    let animal = i;
    if (animal%5 !== 0 && animal%7 !== 0){
        console.log(i)
    }else if (animal%5 === 0 && animal%7 === 0){
        console.log("chickenmonkey")
    } else if (animal%5 === 0){
        console.log("chicken")
    } else if (animal%7 === 0){
        console.log("monkey")
    }
}
