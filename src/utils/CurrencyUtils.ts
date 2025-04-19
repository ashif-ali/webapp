class CurrencyUtils {
    static formatToINR(amount: number): string {
        // Format the amount to Indian Rupees (INR) using Intl.NumberFormat
        // The "en-IN" locale is used for Indian formatting
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(amount);
    }
}
export default CurrencyUtils;
