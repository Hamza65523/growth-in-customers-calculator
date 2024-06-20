const CustomerGrowthCalculator = require('./calculator');

const calculator = new CustomerGrowthCalculator(1000, '2023-06-01');
calculator.updateGrowthRateForMonth(0, 0.05); // Update growth rate for the first month
calculator.updateGrowthRateFromMonth(1, 0.03); // Update growth rate for all subsequent months

const results = calculator.calculateCustomers();
console.log(results);