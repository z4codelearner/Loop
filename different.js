// for (let i = 0; i < 20; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }




// for (let i = 0; i < 20; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }




// for (let i = 0; i < 20; i+=2){
//     console.log(i);
// }

// Give me the list numbers between 1 to 30 divisible by 5

// for (let i = 1; i <= 30; i++ ){
//     if ( i % 5 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++ ){
//     if ( i % 3 === 0){
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 30; i++ ){
//     if ( i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++ ){
//     if ( i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// give me sum of numbers from 1 to 30 that are  divisible by 3
let total = 0;
for ( let i = 1; i <= 30; i++){
    if (i % 3 === 0){
        console.log(i);
        total = total + i;
        console.log('numbers of total', total);
    }
}
console.log('divisible total number',total);