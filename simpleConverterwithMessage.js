//ex 16. module 4
function converter(celsuis){
    var farenheit = (celsuis*9/5)+32;
    var message = celsuis+" celsuis are "+farenheit+" farenheit.";
    return message;
}

console.log(converter(47));
console.log(converter(23));
console.log(converter(81));