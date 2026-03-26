function calculatePriceWithTax(cost, taxPercent) {
    if (typeof cost !== 'number' || typeof taxPercent !== 'number') {
      throw new Error('Valores devem ser numéricos');
    }
  
    if (cost < 0 || taxPercent < 0) {
      throw new Error('Valores não podem ser negativos');
    }
  
    const finalPrice = newFunction_1();
  
    return Number(finalPrice.toFixed(2));

    function newFunction_1() {
        return newFunction();
    }

    function newFunction() {
        return cost + (cost * taxPercent / 100);
    }
  }
  
  export default { calculatePriceWithTax };