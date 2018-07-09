truncate_string = function (str1, length) {
  
    if ((str1.constructor === String)&& (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("12345 67890",4));
