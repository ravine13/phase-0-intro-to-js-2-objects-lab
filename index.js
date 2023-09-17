// Write your solution in this file!
//const employee = new Object();

let employee = {
    name: "Ravine",
    streetName: "25th avenue"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {

    let newEmployee = {...employee};
    newEmployee[key] = value;

    
  
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){

   employee[key] = value;
   return employee;
  }

  function deleteFromEmployeeByKey(employee, key){

  let employee1 = {...employee};

  delete employee1[key];

  return employee1;
  }
function destructivelyDeleteFromEmployeeByKey(employee,key){
  
  delete employee[key];
 
  //employee = key;
return employee;
}


