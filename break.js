for (let i = 0; i < 150; i++ ){
    console.log(i);
    if ( i >= 50){
        break;
    }
}
console.log('life after break up');

let n = 55;
while (n > 25){
    console.log(n);
    if (n < 50){
        break;
    }
    n--;
}

let m = 85;
while(m > 65){
    if (m < 75){
        break;
    }
    console.log(m);
    m--;
}