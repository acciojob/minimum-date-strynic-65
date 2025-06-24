function minDate(dates) {
  // Using reduce to find the earliest date
  return dates.reduce((min, date) => {
    return date < min ? date : min;
  });
}

// Test cases
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // Output: "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // Output: "2022/12/31"

