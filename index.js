// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};
//updateEmployeeWithKeyAndValue(employee, key, value)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    
};
//delete non-dest'
function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}
//delete dest'
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};


