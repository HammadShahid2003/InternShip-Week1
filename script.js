//---------------Task1----------------

console.log(" \t\t\tTask1 :")
//----------------------------------------
function createCounter() {
  let counter = 1;

  const increment=()=> {
    return counter++;
  }
  const getValue=()=> {
    return counter;
  }

  return { increment, getValue };
}

const { increment: increment1, getValue: getValue1 } = createCounter();

console.log(getValue1()); 
increment1();
console.log(getValue1()); 




//------------Task2--------------------------
console.log(" \t\t\tTask2 :")
//-----------------------------------
function checkPrimitiveType(arg){
return typeof(arg);
}
console.log("Primitive type of 1:"+checkPrimitiveType(1));
console.log(`Primitive type of : "Hello": `+checkPrimitiveType("Hello"));
console.log("Primitive type of 1.33:"+checkPrimitiveType(1.33));
console.log("Primitive type of true:"+checkPrimitiveType(true));





//---------Task3--------------------------
console.log("\t\t\tTask3");
//-------------------------------------
const numbers=[1,2,3,44,55,6,1,99,4,8,10,11,25];
console.log("Array: "+numbers);

//--Part1------------------------
const odd=numbers.filter((num)=>{
return (num%2!=0);
});
console.log(odd);
//-----Part2-------------------
console.log("First Number Greater Than 50: "+numbers.find((val)=>{
return val>50;
}))
//-----Part3------------------
numbers.forEach((val,index)=>{
  console.log(index+": "+val);
})




//-------------------Task4------------------
console.log("\t\t\t\tTask4");
//----------------------------------------


for(var i=0;i<=10;i++){
console.log(i);
}
const obj={
name:"Hammad",
age:"20",
degree: "BSSE",
university:"FAST LHR"

}
const logObjectProperties=(arg)=>{
console.log("properties of object are: ");
for(prop in arg){
  console.log(prop+":"+arg[prop]);
}
}
logObjectProperties(obj);


//------------------TASK5---------------
console.log("\t\t\t\tTask5");
//----------------------------------------

console.log(a); //output undefined because a is hoisted in global scope
console.log(b); //output undefined because b is hoisted in global scope although it is declared inside but a block but still it has global scope
var a=1;
{
  //console.log(c,d); //referenced error because let and const variable are in their temporal deadzone(time from hoisting to initalized)
  //they can be only accessed after they have been intialized
var b=2;
const c=3;
let d=4;
}
//console.log(a,b,c,d); // it output c is not declared because const and let are block scoped i.e cannot be accessed outside the block they are declared
//similarly a and b will be logged as they are hoisted and not intialized too
console.log(a,b);


//-----------Task6-----------
console.log("\t\t\t\t Task6");
//----------------------------------------

// Global scope
var global = "I'm a global variable";

function variableScopeTest() {
    // Function scope
    var functionVar = "I'm a function-scoped variable (var)";
    let functionLet = "I'm a function-scoped variable (let)";
    const functionConst = "I'm a function-scoped variable (const)";
    
    console.log(global); // Accessible
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible

     {
        // Block scope
        var blockVar = "I'm a block-scoped variable (var, but in block)";
        let blockLet = "I'm a block-scoped variable (let)";
        const blockConst = "I'm a block-scoped variable (const)";
        
        console.log(blockVar); // Accessible
        console.log(blockLet); // Accessible
        console.log(blockConst); // Accessible
    }

    console.log(blockVar); // Accessible: I'm a block-scoped variable (var, but in block)
    // console.log(blockLet,blockConst); // ReferenceError: blockLet and blockConst is not defined beacuse they cannot be accessed outside block
   
}



variableScopeTest();

// Log the function scope variables from the global scope
// console.log(functionVar); // ReferenceError: functionVar is not defined beacuse they cannot be accessed outside functions
// console.log(functionLet); // ReferenceError: functionLet is not defined beacuse they cannot be accessed outside functions
// console.log(functionConst); // ReferenceError: functionConst is not defined beacuse they cannot be accessed outside functions




//-------------Task7---------------------------
console.log("\t\t\t\tTask7");
//--------------------------------------------


class Person{
  name ="Hammad";
  age=20;

   greet=()=>{
    
    console.log(`Hello I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const hammad=new Person();
hammad.greet();



//---------------Task8--------------
console.log("\t\t\t\t\tTask8");
//----------------------------------------


function calculateArea(radius){

  return 3.14* radius**2;
}

console.log("Area of Circle:"+calculateArea(5));

//------------------------Task9-------------
const obj2={
  name:"Hammad",
  age:"20",
  degree: "BSSE",
  university:"FAST LHR",
  
  address:{
    street:"5A",
    area:"Bahria Town"
  }


}
console.log("\t\t\t\tTask9");
const temp={...obj2};
temp.address.street="10A";
console.log("value of nested object of obj2: "+obj2.address.street);
console.log("value of nested object of temp(shallow copy): "+temp.address.street);
//output is same result however we changed value of temp but value of original obj2 is also changed which means that spread operator
//doesn't do deep copy incase of nested objects and still returns a reference of nested object hense result in shallow copy


//-----------------Task10---------------------
console.log("\t\t\t\t\tTask  10")
//----------------------------------------

const temp2=JSON.parse(JSON.stringify(obj2));
temp2.address.street="2000A";
console.log("value of nested object of obj2: "+obj2.address.street);
console.log("value of nested object of temp(shallow copy): "+temp2.address.street);

// In this case value of nested objects is deeply copied too rather than reference is copied
