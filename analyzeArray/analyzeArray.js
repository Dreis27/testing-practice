
function analyzeArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return null; 
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return {
      average,
      min,
      max,
      length: numbers.length,
    };
  }

  module.exports = analyzeArray;