// Initialize the employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  
  // 1. updateEmployeeWithKeyAndValue (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };  // Use spread to create a new object with updated key-value
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Mutate the original employee object
    return employee;  // Return the mutated employee
  }
  
  // 3. deleteFromEmployeeByKey (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };  // Create a copy of the employee object
    delete newEmployee[key];  // Delete the specified key from the copy
    return newEmployee;  // Return the new object without the key
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Mutate the original employee object by deleting the key
    return employee;  // Return the mutated employee object
  }
  
  // Example Usage
  
  console.log("Original employee:", employee);
  
  // Non-destructive update
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith');
  console.log("Updated employee (non-destructive):", updatedEmployee);  // New object with updated name
  console.log("Original employee after non-destructive update:", employee);  // Original employee remains unchanged
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
  console.log("Employee after destructive update:", employee);  // Original employee is updated
  
  // Non-destructive delete
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log("Employee after non-destructive delete:", employeeWithoutAddress);  // New object without streetAddress
  console.log("Original employee after non-destructive delete:", employee);  // Original employee remains unchanged
  
  // Destructive delete
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log("Employee after destructive delete:", employee);  // Original employee is modified
  