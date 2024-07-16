// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
function Employee(firstName, lastName, salary){
    this.firstName = firstName,
    this.lastName = lastName,
    this.salary = salary
  }
   
   const employeeArray = []
   let addMore = true;

   while (addMore){
    
    const firstName = prompt("Enter first name: ");
    const lastName = prompt("Enter last name: ");
    let salary = prompt("Enter salary: ");

    salary = parseFloat(salary);
    if(isNaN(salary)){
      salary = 0 
    }
    const newEmployee = new Employee(firstName, lastName, salary)
    employeeArray.push(newEmployee);
    addMore = confirm("Would you like to add another employee?");
    }
  
    return employeeArray;

  }

  


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  // TODO: Calculate and display the average salary
  //map the salaries so we are able to access the employee object 
  const salaries = employeesArray.map(employee => employee.salary)
  //reduce all the numbers on the array and then get their sum then 
  //divide it with the length of the array and get the average
  const average = salaries.reduce((sum, num) => sum + num, 0) / salaries.length

  const answer = `The average salary is ${Math.floor(average)}`

  console.log(answer)
  
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  const randomEmployee = employeesArray[randomIndex];

  const answer = `The award for the best employee goes to ${randomEmployee.firstName} ${randomEmployee.lastName}`

   console.log(answer)
  

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
