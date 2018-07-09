function checkReg(val){
    return toString.call(val)==='[object RegExp]';
}
console.log(checkReg(/test/));