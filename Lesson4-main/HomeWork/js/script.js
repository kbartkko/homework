
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }


// function checkAge(age) {
// return (age>18) ?  true : confirm('Батьки дозволили?')
// } 

// checkAge(13);

// function checkAge(age) {
//     return (age>18) || confirm('Батьки дозволили?')
// }

// checkAge(12)


// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function returnMinNumber(a, b) {
//     if (a > b) {
//         return console.log(b);
//     }
//     return console.log(a);
// }

// returnMinNumber(4, -4);

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Ви згодні?",
    answerYes = () => { alert("Ви погодились.")},
 answerNo = () =>  {alert("Ви скасували виконання.")}
)
