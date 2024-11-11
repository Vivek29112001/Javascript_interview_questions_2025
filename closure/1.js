function xyz(){
    let x= "this is javascript";
    function abc(){
        console.log(x,"programing")
    }
    return abc;
}
const closure = xyz();
closure();