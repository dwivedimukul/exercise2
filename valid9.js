function is_char(value)
    {
     // if (Object.prototype.toString.call(value) !== '[object String]')
        return toString.call(value) === '[object String]';
    return value && value.length === 1;
    }
 
console.log(is_char('heyyy'));
console.log(is_char('*'));
