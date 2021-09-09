// ? log only the expressions that evaluate to true

// only falsy values: undefined, null, "", NaN, 0 

14 > 8;  // true
42 > 44; // false
1 > 1; // false

31 < 22; // false
9 < 13; // true
0 < 0; // false

12 >= 12.5; // false
60 >= 40; // true
2 >= 2; // true

12 <= 12.5; // true
14 <= 0.3; // false
5 <= 5; // true

3 === 3; // true
3 === "3"; // false
"3" === "3"; // true
3 === 4; // false

2 !== "2"; // true
"2" !== "2"; // false
2 !== 1; // true

"two" == 2; // false
2 == "2"; // true
2 == 2; // true

3 != "three"; // true
"3" != 3; // false
3 != 3; // false