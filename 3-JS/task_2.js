"use strict";

// 1) x^2 - 6x + 9 = 0 => x^2 - 2kx + 9 = 0
// a = 1, b = -6, c = 9
// a = 1; b = 2k => -6 = 2k => k = -3; c = 9
// беру формулу приведённого дискриминанта (D) - так проще и можно когда а = 1 :)
// D/4 = k^2 - c => D/4 = 9 - 9 => D = 0 
// если D = 0, то х = -k => x = -(-3) => x = 3
// чтобы узнать корень использую Math.sqrt


// const a1 = 1; наверное в нашем случае a1 можно и не писать, т.к. a = 1, не влияет 
const k1 = -3;
const c1 = 9;
const d1 = (k1 * k1 - c1)
const D1 = 4 * d1;
if (D1 === 0) {
    const x1 = -k1;
    console.log("Ответ к уравнению 1: " + x1);
} else if (D1 > 0) {
    const koren1 = Math.sqrt(d1);
    const x3 = -k1 + koren1;
    const x4 = -k1 - koren1;
    console.log("Ответ к уравнению 1: " + x3 + "и" + x4);
} else {
    console.log("Нет действительных корней");
}

// 2) x^2 - 4x - 5 = 0 => x^2 - 2kx - 5 = 0
// a = 1; b = -4; c = -5; b = 2k => -4 = 2k => k = -2
// беру формулу приведённого дискриминанта (D) - так проще и можно когда а = 1 :)
// D/4 = k^2 - c => D/4 = 4 + 5 => D = 9 
// т.к. D > 0, то 2 корня: x = -k + квадрат(k*k - c) => 2 + 3 = 5
//                         x = -k - квадрат(k*k - c) => 2 - 3 = -1


// const a2 = 1;  наверное в нашем случае a2 можно и не писать, т.к. a = 1, не влияет
const k2 = -2;
const c2 = -5;
const d2 = (k2 * k2 - c2);
const D2 = 4 * d2;
if (D2 === 0) {
    const x5 = -k2;
    console.log("Ответ к уравнению 2: " + x5);
} else if (D2 > 0) {
    const koren2 = Math.sqrt(d2);
    const x6 = -k2 + koren2;
    const x7 = -k2 - koren2;
    console.log("Ответ к уравнению 2: " + x6 + " и " + x7);
} else {
    console.log("Нет действительных корней");
}
