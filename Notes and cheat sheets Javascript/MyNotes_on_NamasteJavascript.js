/*1. every program starts with execution context
        => Memory creation(variable environment) + code execution

2. Hoisting =>
   ->Hoisting allows functions to be safely used in code before they are declared.
   ex. func();
       function func(){};

   ->Variable and class declarations are also hoisted, may lead to unexpected error.
     ex. console.log(x);      //This will print undefined(not 7),
         var x = 7;           //but this is not error, possible because of hoisting.

      console.log(num);        //Throws ReferenceError exception.
      num = 6;                 //Initialization (not declared as variable)

   #Variables declared with let and const are also hoisted but, unlike var, are not
    initialized with a default value (referenceError)

     ->console.log(num); //ReferenceError exception as the variable value is uninitialized
     let num = 6; // Initialization

     ->Function "expressions" and class expressions are not hoisted.
      ex. let func = function(){};

3. Js is loosely typed language
        => in GEC variable has memory allocation but DATA TYPE (ex. string, no., array) is not selected
        so, we can reassign any data type to variable later in program.

4. Scope
    ->The current context of execution.
    ->child scopes have access to parent scopes, but not vice versa.
     i.e. lexical environment (created with every execution context) = local memory + its parents lexical memory.
    ->A function serves as a closure in JavaScript, and thus creates a scope.
    ->variable defined exclusively within the function cannot be accessed from outside
     the function or within other functions.

  #scope chain => in function if var is not present inlocal memory then it will look for
  its parents lexical environment(scope) and if still not find then will keep finding in
  their parents, grand parents scope. this is called scope chain.

5. Error
    (a) Reference error = variable doesn't exist (or hasn't yet been initialized) in the current scope.
      ex. variable is not defined
    (b) Stntax error = An exception caused by the incorrect use of a pre-defined syntax.
      wrong syntax
    (c) Type error = operation could not be performed, typically when a value is not of the expected type.
      ex. re-assigning const - type error

6. Block & Block scope
  ->compound statement(multiple sentences as one) written inside {} is block and it has its own memory and scope called block scope.
  ->let and const are block scoped, i.e. they cannot be acceses ouside its block scope

7. Shadowing
  ->when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable
    from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable
    in the memory space. This is known as Shadowing or Variable Shadowing.

8. Closures
  ->A closure is the combination of a function bundled together (enclosed) with references to its surrounding state(lexical environment).
  ->closures are created every time a function is created, at function creation time.

  # uses of closures
  (1) module design pattern
  (2) currying
  (3) function like ONCE(can be executed once)
  (4) memoize
  (5) maintaining state in async world
  (6) setTimeout
  (7) iterators
  (8) data hiding
  and many more...

  #disadvantages
  (1) more memory usage
  -> garbage collectors clean the memory used by unused variables, but due to function closure its not, because it can be invoked later.

9. Functions
  (1)function statement / function declaration(hoisting possible)
  -> function a(){}

  (2)function expression(hoisting not possible)
  -> let a = function (){}    //anonymous function(function without name. ex. function (){}) expression.

  -> let a = function b(){}   //named function expression

10. parameter vs argument
  -> function a(param1, param2){}     //param are parameteers
     a(1, 2)                          //1, 2 are arguments used for those parametrs

11. first class functions
  ->when functions in js are treated like any other variable, then its called first class function
  ->function can be passed as argument to other functions, can be returned by another function and can be assigned as a value to variable.
  ->thats why function are called first class citizens in js.

12. Higher order function
  ->A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
  ->only possible because of the First-class function.
  -> Map, Filter, Reduce are some prime examples.

13. Map
  let arr = [5,1,3,2,6]

  arr.map((ans)=>console.log(ans))     //5,1,3,2,6

14. Filter
  let arr = [5,1,3,2,6]

  arr.filter((ans)=>console.log(ans>4))  //5,6

15. Reduce
  let ans = arr.reduce(function(accumulator, current){
    if(current > accumulator){return current}
    else return accumulator
  }, 0)                                          //0 is initial accumulator
  console.log(ans)



*/
