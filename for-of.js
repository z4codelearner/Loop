/**
 *  *JavaScript এর for...of লুপ কি?
 * 
 *   *for...of হল একটা লুপ যা iterable (যেমন: array, string, Map, Set ইত্যাদি) এর মধ্যে থাকা value গুলো এর উপর কাজ করে।

    *মানে: এটা iterable এর প্রতিটি আইটেমের মান (value) পায় এবং সেই মান দিয়ে লুপের মধ্যে কাজ করে।


    // সিনট্যাক্স (Syntax):
    for (const item of iterable) {
  // এখানে item হচ্ছে iterable এর প্রতিটি value
  // এখানে তোমার কাজ
}

item — প্রতিটি iteration এ iterable এর current value ধরে রাখে

iterable — যেটার মধ্যে থেকে value গুলো নেবে, যেমন array, string ইত্যাদি

//উদাহরণ ১: Array এর জন্য

const fruits = ['আম', 'কলা', 'কমলা'];

for (const fruit of fruits) {
  console.log(fruit);
}


*উদাহরণ ২: String এর জন্য

const word = "বাংলা";

for (const letter of word) {
  console.log(letter);
}

 */

/**
 * for...of vs for...in এর পার্থক্য
 * 
 * for...of: iterable এর value এর উপরে কাজ করে। (Array এর element বা String এর letter)

for...in: object বা array এর index বা key এর উপরে কাজ করে।


const arr = ['a', 'b', 'c'];

for (const index in arr) {
  console.log(index); // 0, 1, 2
}

for (const value of arr) {
  console.log(value); // 'a', 'b', 'c'
}



for...of লুপ iterable এর মান (value) পাওয়ার জন্য ব্যবহার হয়।

এটা সহজ ও পরিষ্কার syntax দেয় যখন তোমাকে iterable এর value নিয়ে কাজ করতে হয়।

এটা array, string, Map, Set ইত্যাদির জন্য কাজ করে।

 */




const numbers = [42, 34, 54, 56, 67, 78];
console.log(numbers);

for (const num of numbers) {
    console.log(num);
}

const fruits = ['orange', ' banana', 'apple', 'mango', 'watermelon', 'pineapple', 'kiwi', 'grape'];
for (const fruit of fruits) {
    console.log(fruit);
    console.log('I want to eat ');
}