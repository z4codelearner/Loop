/**
 * for লুপ হলো এমন একটি লুপ যা নির্দিষ্ট সংখ্যা বার একটি কাজ বারবার করতে ব্যবহৃত হয়।

🔧 for লুপের সাধারণ গঠন (Syntax):

for (শুরু; শর্ত; পরিবর্তন) {
    // এই কোডগুলো বারবার চলবে
}


🧠 অংশগুলোর ব্যাখ্যা:

for (let num = 1; num <= 5; num++) {
    console.log(num);
}
🔍 উপরের কোডে ৩টি অংশ রয়েছে:

let num = 1; → শুরুতে num নামক একটি ভেরিয়েবল তৈরি করে, যার মান ১

num <= 5; → যতক্ষণ এই শর্ত সত্য (true), ততক্ষণ লুপ চলবে

num++ → প্রতি বার লুপ শেষে i এর মান ১ বাড়বে



 আরেকটা উদাহরণ (জোড় সংখ্যা প্রিন্ট):

for (let num = 2; num <= 10; num += 2) {
    console.log(num);
}


📌 সংক্ষেপে:
for লুপে শুরু, শর্ত, আর আপডেট — সব কিছু এক লাইনে থাকে

এটা সবচেয়ে জনপ্রিয় এবং সহজ লুপ

যখন আমরা জানি কয়বার লুপ চালাতে হবে, তখন for লুপ সবচেয়ে ভালো



let  num = 0; // Loop variable
while (num < 5 ){ // loop Condition
console.log(num); // loop stattement
num++; // loop variable change
}




structure

for (    ;    ;    ){
}



for (first part; second part; third part) {
loop statement
}
 */


// let  num = 0; // Loop variable
// while (num < 5 ){ // loop Condition
// console.log(num); // loop stattement
// num++; // loop variable change
// }


 for ( let num = 0; num < 5; num++){
    console.log(num);
 }