const Utils = {
  formatCurrency: (value: any) => {
    value = value.toFixed(2);
    const result = (value ? value.toString() : "0") + " €";
    return result;
  },
};

export default Utils;
