const moment = require('moment');

class CustomerGrowthCalculator {
  constructor(initialCustomers, startDate) {
    this.initialCustomers = initialCustomers;
    this.startDate = moment(startDate);
    this.monthlyGrowthRates = Array(60).fill(0.02); // Default growth rate of 2% per month
  }

  updateGrowthRateForMonth(monthIndex, newRate) {
    this.monthlyGrowthRates[monthIndex] = newRate;
  }

  updateGrowthRateFromMonth(startMonthIndex, newRate) {
    for (let i = startMonthIndex; i < this.monthlyGrowthRates.length; i++) {
      this.monthlyGrowthRates[i] = newRate;
    }
  }

  calculateCustomers() {
    let customers = this.initialCustomers;
    const results = [];

    for (let i = 0; i < 60; i++) {
      customers += customers * this.monthlyGrowthRates[i];
      results.push({
        month: this.startDate.clone().add(i, 'months').format('MMMM YYYY'),
        customers: Math.round(customers)
      });
    }

    return results;
  }
}

module.exports = CustomerGrowthCalculator;