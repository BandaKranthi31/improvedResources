let num : number = 31;
let string : String = "This is TypeScript!";
let js : boolean = false;
let x : undefined = undefined;
let y : null = null;
console.log(`${string}`);



let tupleExample : [number, number,string,boolean];
tupleExample = [31,3,"TS",true];
tupleExample.push('something went wrong')
console.log(tupleExample)


//TypeScript Objects
const phase : {Name:string,year:number} ={
    Name:"TypeScript Phase",
    year:2025,
}
console.log(phase);
