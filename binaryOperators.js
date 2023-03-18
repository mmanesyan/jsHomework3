const a = {
    valueOf() {
    return 224;
    },
    };
    const b = {
    valueOf() {
    return "hey";
    },
    };
    const c = {
    valueOf() {
    return new String("some");
    },
    };
    const d = {
    toString() {
    return 22;
    },
    };
    const e={};
    const f = {
    toString() {
    return new Number(5);
    },
    };
//  null * undefined //NaN
//  null * true //0
//  null * false //0
//  undefined * true // NaN
//  undefined * false //NaN
//  undefined * 5 //NaN
//  true * false //0
//  true * 2 //2
//  false * 4 //0
//  false * NaN // NaN
//  5 * 3 //15
//  5 * NaN //NaN
//  'hello' * NaN // NaN
//  'hello' * a * b * c * d * e * f//typeError


//  null / undefined //NaN
//  null / true // 0
//  null / false //NaN
//  undefined / true // NaN
//  undefined / false //NaN
//  undefined / 5 //NaN
//  true / false // Infinity
//  true / 2 // 0.5
//  false / 4 // 0
//  false / NaN // NaN
//  5 / 3 //1.(6)
//  5 / NaN //NaN
//  'hello' / NaN // NaN
//  'hello' / a / b / c / d / e / f//typeError


//  null % undefined //NaN
//  null % true // 0
//  null % false // NaN
//  undefined % true // NaN
//  undefined % false //NaN
//  undefined % 5 //NaN
//  true % false // NaN
//  true % 2 //  1
//  false % 4 // 0
//  false % NaN // NaN
//  5 % 3 //2
//  5 % NaN //NaN
//  'hello' % NaN // NaN
//  'hello' % a % b % c % d % e % f//typeError


//  null == undefined //true
//  null == true // false
//  null == false // false
//  undefined == true // false
//  undefined == false //false
//  undefined == 5 //false
//  true == false // false
//  true == 2 //  false
//  false == 4 // false
//  false == NaN // false
//  5 == 3 // false
//  5 == NaN // false
//  'hello' == NaN // false
//  'hello' == a == b == c == d == e == f//typeError


//  null === undefined //false
//  null === true // false
//  null === false // false
//  undefined === true // false
//  undefined === false //false
//  undefined === 5 //false
//  true === false // false
//  true === 2 //  false
//  false === 4 // false
//  false === NaN // false
//  5 === 3 // false
//  5 === NaN // false
//  'hello' === NaN // false
//  'hello' === a === b === c === d === e === f//typeError


//  null < undefined //false
//  null < true // true
//  null < false // false
//  undefined < true // false
//  undefined < false //false
//  undefined < 5 //false
//  true  < false // false
//  true < 2 //  true
//  false < 4 // true
//  false < NaN // false
//  5 < 3 // false
//  5 < NaN // false
//  'hello' < NaN // false
//  'hello'< a < b < c < d < e < f//typeError

//  null > undefined //false
//  null > true // false
//  null > false // false
//  undefined > true // false
//  undefined > false //false
//  undefined > 5 //false
//  true  > false // true
//  true > 2 // false
//  false > 4 // false
//  false > NaN // false
//  5 > 3 // true
//  5 > NaN // false
//  'hello' > NaN // false
//  'hello'> a > b > c > d > e > f//typeError


//  null >= undefined //false
//  null >= true // false
//  null >= false // true
//  undefined >= true // false
//  undefined >= false //false
//  undefined >= 5 //false
//  true  >= false // true
//  true >= 2 // false
//  false >= 4 // false
//  false >= NaN // false
//  5 >= 3 // true
//  5 >= NaN // false
//  'hello' >= NaN // false
//  'hello'>= a >= b >= c >= d >= e >= f//typeError


//  null <= undefined //false
//  null <= true // true
//  null <= false // true
//  undefined <= true // false
//  undefined <= false //false
//  undefined <= 5 //false
//  true  <= false // false
//  true <= 2 // true
//  false <= 4 // true
//  false <= NaN // false
//  5 <=3 //false
//  5 <= NaN // false
//  'hello' <= NaN // false
//  'hello'<= a <=b <= c <= d <= e <= f//typeError