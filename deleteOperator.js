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

//  delete ({}).valueOf//true
//  delete 1 //true
//  delete a.x //true
//  a.y = 3; console.log(delete a.y); //true
//  delete f //true
//  delete z //true