export class Utils {
  public static formatCurrency(value: number): string {
    const newValue = value.toFixed(2);
    const result = (newValue ? newValue.toString() : "0") + " €";
    return result;
  }
}
