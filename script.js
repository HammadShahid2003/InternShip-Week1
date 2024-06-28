//---------------Task1----------------

console.log(" \t\t\tTask1 :")
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
function checkPrimitiveType(arg){
return typeof(arg);
}
console.log("Primitive type of 1:"+checkPrimitiveType(1));
console.log(`Primitive type of : "Hello": `+checkPrimitiveType("Hello"));
console.log("Primitive type of 1.33:"+checkPrimitiveType(1.33));
console.log("Primitive type of true:"+checkPrimitiveType(true));

//---------Task3--------------------------
console.log("\t\t\tTask3");

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

const a=1;
const b=2;
const c=3;