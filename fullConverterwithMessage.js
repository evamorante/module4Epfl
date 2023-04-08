function changeMoney(dollars){
    var francs = dollars*1.02;
    var message = dollars+" dollars are "+francs+" francs.";
    return message;
}
console.log(changeMoney(25));

function changeWater(liters){
    var gallons = liters*0.17;
    var message = liters+" liters are "+gallons+" gallons.";
    return message;
}
console.log(changeWater(3));

function changeHeigth(meters){
    var centimeters = meters*100;
    var message = centimeters+" centimeters are "+meters+" meters."
    return message
}
console.log(changeHeigth(34));