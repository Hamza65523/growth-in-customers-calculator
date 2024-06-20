const CustomerGrowthCalculator = require('./calculator');

test('should calculate the correct number of customers for 5 years', () => {
  const calculator = new CustomerGrowthCalculator(1000, '2023-06-01');
  const results = calculator.calculateCustomers();

  expect(results.length).toBe(60);
  expect(results[0].customers).toBeCloseTo(1020, 0);
  expect(results[59].customers).toBeGreaterThan(3200);
});

test('should update growth rate for a specific month', () => {
  const calculator = new CustomerGrowthCalculator(1000, '2023-06-01');
  calculator.updateGrowthRateForMonth(0, 0.05);
  const results = calculator.calculateCustomers();

  expect(results[0].customers).toBeCloseTo(1050, 0);
});

test('should update growth rate from a specific month', () => {
  const calculator = new CustomerGrowthCalculator(1000, '2023-06-01');
  calculator.updateGrowthRateFromMonth(1, 0.03);
  const results = calculator.calculateCustomers();

  expect(results[1].customers).toBeCloseTo(1051, 0);
  expect(results[59].customers).toBeGreaterThan(3700);
});
