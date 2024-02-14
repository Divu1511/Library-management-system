
let arr = [
    { name: "raj", age: 30, department: "Marketing", email: "raj12@gmail.com", admissiondate:  "2021-10-01"},
    { name: "rajeev", age: 25, department: "HR",email: "rajeevv2@gmail.com", admissiondate:  "2022-10-13" },
    { name: "deep", age: 35, department: "HR",email: "deep890@gmail.com", admissiondate:  "2023-11-24" },
    { name: "rohan", age: 28, department: "Operations",email: "rohan145@gmail.com", admissiondate:  "2020-12-12" },
    { name: "sky", age: 32, department: "Operations" ,email: "sky134@gmail.com", admissiondate:  "2021-12-21"},
    
];
console.log(arr);
 arr.forEach(arr1=>{
    console.log(arr1.department)
});
const departmentcount=[];
arr.forEach(arr1=>{
    const department=arr1.department;

if(departmentcount[department]){
     departmentcount[department]++;
 }
 else{
     departmentcount[department]=1;
 }});

 console.log(departmentcount)
