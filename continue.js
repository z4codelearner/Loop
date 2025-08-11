// Continue ---> skip this rest of the code for this iteration
// break --> i am done with this loop... lopp end

// for (let n = 0; n < 10; n++){
//     if (n % 2 === 1){
//         continue;
//     }
//     console.log(n);
// }

let m = 0;
while (m < 50){
    m++;
    if (m % 5 !== 0){
        continue;
    }
    console.log(m);
    
}
