// Event listener to select salary
var salary = document.querySelector('#salary');
var output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
// Save the data into a object
var save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    } catch (e) {
        return;
    }
}
// Create the employee data object by getting their respective values 
var createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
        employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValueById('#salary');
        employeePayrollData.note = getInputValueById('#notes');
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        alert(employeePayrollData.toString());
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    return employeePayrollData;
}
// Retrive all the data of the selector passed
var getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked) {
            selectedItems.push(item.value);
        }
    });
    console.log(selectedItems);
    return selectedItems;
}

/*
* 1: querySelector is the newer feature.
* 2: The querySelector method can be used when selecting by element name,
*    nesting, or class name.
* 3: querySelector lets you find elements with rules that can't be 
*    expressed with getElementById
*/
var getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
