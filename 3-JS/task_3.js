"use strict";
// n * n в конкатенацию => "n" + "n" => последовательно складываются содержимое строк- склеивает => nn
// если будем складывать число и строку, то тоже склеит, а нам нужна сумма
// 2 + 2*2 + 2*2*2 => 2 + намбер "22" + намбер "222" => 246
// +(prompt("")) - чтобы можно было самим вводить числа 
// Number.isInteger - чтобы число было только целое
// repeat - для повтора строки

const n = +(prompt(""));  
const nn = String(n).repeat(2);                        
const nnn = String(n).repeat(3);                                  
if (Number.isInteger(n) && n >= 1 && n <= 9) {
    console.log(n + Number(nn) + Number(nnn));
} else {
  console.log("Число должно быть целым и от 1 до 9");
}

// число 2                число  2        
// число 22               строка 22
// число 222              строка 222
// итог: 246              итог: 222222    
