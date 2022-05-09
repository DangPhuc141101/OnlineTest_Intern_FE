// function a (input) {
//     let a = 100;
//     if (input) {
//         let b =  a + 1;
//         var c = a + 1;
//     }
//     console.log(c);
//     console.log(b);
// }
// a(true);
// const add = (a=10, b=5) => a+b;
// console.log(add(undefined,9))

const groupByLength = (array) => {
    const result = {};
    array.forEach((item) => {

        result[item.length] = item;

    })
    return result;
}

const array = ['one', 'two', 'three', 'huy0ngu'];
console.log(groupByLength(array))