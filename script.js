function clickForme (){
    let click = 0;
    return function(){
        if(click<5){
            click++ ;
            console.log(`click ${click} approved `)
        } else{
            console.error("limit reached , try agian later")
        }
    }
}

let fun = clickForme();
fun();
fun();
fun();
fun();
fun();
fun();