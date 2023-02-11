/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
 
}

function addData() {
  //Write your code here, just console.log
      var obj={id:4,name:"susan",age:"20",marks:45};
      arr.push(obj);
      console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(var i=0;i<=arr.length;i++){
    if(arr[i].marks <=50){
      arr.splice(i, i + 1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  
  var newarr =[
  { id: 1, name: "Anu ", age: "18", marks: 80 },
  { id: 2, name: "Apes", age: "20", marks: 85 },
  { id: 3, name: "Arun", age: "19", marks: 35 },
  ];
  var arrn =arr.concat(newarr);
  console.log(arrn)

  
}
