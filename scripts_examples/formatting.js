/* Use control statement (if, while etc.) correctly */
// bad
if (
  (foo === "123" || bar === "abc") && doesItLookGoodWhenItBecomesThatLong() 
  && andHereWeGotOneMoreCondition()
) {
  callTheFunction();
}

// good
if (
  (foo === "123" || bar === "abc") &&
  doesItLookGoodWhenItBecomesThatLong() &&
  andHereWeGotOneMoreCondition()
) {
  callTheFunction();
}


/* Leave a blank line after blocks and before the next statement */
// bad
function one(){
    console.log(foo)
}
function two(){
    console.log(baz)
}
  
// good
  function one(){
    console.log(foo)
}

function two(){
    console.log(baz)
}


/* If/else/for/while/try should always have spaces, braces and span multiple lines. */
// bad
if (condition) doSomething();

for(var i=0;i<100;i++) callSomeFunction();
  
// good
if (condition) {
    doSomething();
}

for(var i = 0; i < 100; i++) {
    callSomeFunction();
}








