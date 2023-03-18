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


//  -([])//-0
//  -([2]) //-2
//  -([2, 3]) //NaN
//  -(function() { }) //NaN
//  -(a) // -224
//  -(b) // NaN
//  -(c) // NaN
//  -(d) // -22
//  -(e) // NaN
//  -(f) // NaN


//  --([])//-1
//  --([2]) //1
//  --([2, 3]) //NaN
//  --(function() { }) //NaN
//  --(a) // 223
//  --(b) // NaN
//  --(c) // NaN
//  --(d) // 21
//  --(e) //NaN
//  --(f) // error


//  ++([])//1
//  ++([2]) //3
//  ++([2, 3]) //NaN
//  ++(function() { }) //NaN
//  ++(a) // 225
//  ++(b) // NaN
//  ++(c) // NaN
//  ++(d) // 23
//  ++(e) //NaN
//  ++(f) // TypeError


//  ([])--//0
//  ([2])-- //2
//  ([2, 3])-- //NaN
//  (function() { })-- //NaN
//  (a)-- // 224
//  (b)-- //  NaN
//  (c)-- //  NaN
//  (d)-- // 22
//  (e)-- //NaN
//  (f)-- // TypeEror


//  ([])++//0
//  ([2])++//2
//  ([2, 3])++ //NaN
//  (function() { })++ //NaN
//  (a)++ // 224
//  (b)++ // NaN
//  (c)++ //NaN
//  (d)++ // 22
//  (e)++ //NaN
//  (f)++ // TypeError

