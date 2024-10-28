"use strict"


function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant == 0) {
    arr = [-b / (2 * a)];
  } else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];    
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sum = amount - contribution;
  let proc = (percent / 100) / 12;
  let result = sum * (proc + (proc / (((1 + proc)**countMonths) - 1)));
  let total = result * countMonths;
  
  return +total.toFixed(2);
}