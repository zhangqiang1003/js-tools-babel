() => {
    console.log(1);
}

let arr = [1,2,3,4];
let arr1 = [...arr,5,7];
const a = 1;
(a, b = 4) => {
    let c;
    c = a + b;
}

c => c + 5;

let p = new Promise((resolve,reject) => {
    let a = 12, b = 14;
    let time = setTimeout(() => {
        b--;
    },1000);
    if (b < 2) clearTimeout(time);
    if (a + b < 15) {
        resolve(a + b);
    }
});

p.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});