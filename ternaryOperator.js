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


// 1 ? 234 : 32 // 234
//a[a.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() //224
//b[b.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() //"hey"
//c[c.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() //[String: "some"]
//d[d.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']()//22
//e[e.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']()//[object Object]
//f[f.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']()//[Number:5]

