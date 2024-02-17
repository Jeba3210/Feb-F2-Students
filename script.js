/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map((element) => {
        if(element.marks >= 50){
            console.log(element.name);
        }
    })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) => {
        if(element.marks >= 50){
            console.log(element.name);
        }
    })
  }
  
  const data = {id:4,name:"susan",age:"20",marks:95};

  function addData() {
    //Write your code here, just console.log
     arr.push(data);
     console.log(arr[3]);
  }

  function passedStudent(student){
     return student.marks >= 50;
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let filteredArr = arr.filter(passedStudent);
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const arr1 = [
      { id: 5, name: "Kinslee", age: "19", marks: 60 },
      { id: 6, name: "Ryann", age: "20", marks: 75 },
      { id: 7, name: "Dustin", age: "17", marks: 45 },
    ];

    const newArr = arr.concat(arr1);
    console.log(newArr);

  }
