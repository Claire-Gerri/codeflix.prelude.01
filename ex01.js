function lowerCase(str = ""){
    let maChaine = "";
    for (let i = 0; i < str.length; i++) {
        let car = str[i].charCodeAt();
        if (car >= 65 && car <= 90) {
            maChaine += String.fromCharCode(car+32);
        }
        else {
            maChaine += String.fromCharCode(car);
        }
    }
    console.log(maChaine);
}
lowerCase("ChoPpeR");