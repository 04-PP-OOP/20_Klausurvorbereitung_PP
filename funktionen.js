/* DATENSTRUKTUREN */

/* Primitives */

/*
let a;  // var - Definition oder Deklaration

a = true; // Boolean (true, false)
a = "Hallo";  // String
a = 2;  // Number

console.log(a);
console.log(typeof a);
*/

/* Arrays */

/*
//let arr = new Array();
let arr;
arr = [false,true,true];
arr = ["a","b","c","d"];

// Index beginnt mit 0
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

console.log(arr[3]);
console.log(arr[arr.length-1]);
console.log(arr[7]);
*/

/*
let arr = [];
console.log(arr);
arr.push("a");
console.log(arr);
arr.push("b");
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.pop();
console.log(arr);
*/

/* Objekte */

/*
let obj;

// obj = {};
// console.log(obj);

// obj = {x:10, y:"hello"};
// console.log(obj);
// // Dot-Syntax / Punktnotation
// console.log(obj.y);  

obj =   { 
            sub1:   {

                        val1:"hi",
                        val2: 2
                    }
        }

// {{{{ ...}}}} nested Object

console.log(obj); // Zwischenschritt
console.log(obj.sub1); // Zwischenschritt
console.log(obj.sub1.val1);
console.log(obj.sub1.val2);

// xml | html
// DOM Document Object Model
// nach dem Parsen / Laden der HTML-Seite 
*/

/* DOM Document Object Model */
/*
console.log(document); // <html>
console.log(document.body);  // <body>
console.log(document.body.children);  // <body>...</body>
console.log(document.body.children[0]); // h1
console.log(document.body.children[0].innerHTML); // h1
document.body.children[0].innerHTML = "Hallo";
*/

/* ENTSCHEIDUNGSSTRUKTUREN */
/*
let cond;
cond = (6 > 4);  // true  
cond = (6 < 4);  // false
cond = (4 == 4);  // true

cond = (4 == "4");  // Test auf Wert
//cond = (4 === "4"); // Test auf Wert UND Typ

console.log(cond);

//if (cond) {
if (6 > 4) {
    console.log("Aussage wahr");
} else {
    console.log("Aussage falsch");
}

// else if | switch
*/

/* FUNKTIONEN */

/*
// 1. Kapselung
function test() // Funktionsrumpf
{
    console.log("Testausgabe");
}

test(); // Funktionscall
*/

/*
// 2. return
function test() // Funktionsrumpf
{
    // .. macht irgend etwas
    let ausgabe = "Testausgabe";
    return ausgabe;  // Lieferung an die Stelle des calls
    console.log("Hallo");  // nach return Abbruch!
}

console.log(test());
*/

/*
// 3. Parameter
function test(firstName) // Parameter (p1,p2, ..pN)
{
    // .. macht irgend etwas
    let ausgabe = "Hallo " + firstName + "!";
    return ausgabe;  
}

console.log(test("Anna")); // Argument(e)
//Argumente (Daten)--> Parameter (Platzhalter)
*/

// 4. Fkt-Call aus Funktionen

/*
function test(firstName) // Parameter
{
    let ausgabe = grussformel() + firstName + "!";
    return ausgabe;  
}

function grussformel() {
   // return "Hola, ";
    return "Hello, ";
}

console.log(test("Anna")); 
*/

// rechner()
// summe() // diff()








