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

//console.log(a,a++,a) // { valueOf: [Function: valueOf] },TypeError,225
//console.log(a, ++a, a); //{ valueOf: [Function: valueOf] },TypeError,225
// console.log(b, b++, b);//{ valueOf: [Function: valueOf] },TypeError,{ valueOf: [Function: valueOf] }
// console.log(b, ++b, b);//{ valueOf: [Function: valueOf] },TypeError,{ valueOf: [Function: valueOf] }
// console.log(c, c++, c);//{ valueOf: [Function: valueOf] },TypeError,{ valueOf: [Function: valueOf] }
// console.log(c, ++c, c);//{ valueOf: [Function: valueOf] },TypeError,{ valueOf: [Function: valueOf] }
// console.log(d, d++, d);//{ toString: [Function: toString] },TypeError,{ toString: [Function: toString] }
// console.log(d, ++d, d);//{ toString: [Function: toString] },TypeError,{ toString: [Function: toString] }
// console.log(e, e++, e);//{},typeError,{}
// console.log(e, ++e, e);//{},typeError,{}
// console.log(f, f++, f);//{ toString: [Function: toString] },TypeError,{ toString: [Function: toString] }
// console.log(f, ++f, f);//{ toString: [Function: toString] },TypeError,{ toString: [Function: toString] }