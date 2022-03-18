let employeesListElem = document.querySelector('.employees-list');

async function getAllEmployees() {
  const employeesResponse = await fetch("http://dummy.restapiexample.com/api/v1/employees");
  const employeesList = await employeesResponse.json();
  return employeesList.data;
}


function showEmployees(employees){
employees.forEach(employee =>{
let employeeItemElem = document.createElement("li");
employeeItemElem.innerHTML = `
  <div class="employee_pic">
	<img src="img/user.png" alt="${employee.employee_name}" />
  </div>
  <h2><span>${employee.employee_name}</span></h2>
  <p> Age: <span>${employee.employee_age}</span></p>
  <p> Salary: <span>${employee.employee_salary}</span></p>
 `;
 employeesListElem.appendChild(employeeItemElem);
})
}

async function data() {
 showEmployees(await getAllEmployees());
}
data();