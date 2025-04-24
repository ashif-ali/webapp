import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpenses } from "../services/expense-service";

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [error, setErrors] = useState<string>("");
    const [isLoading, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setLoader(true);
        getExpenses()
            .then((response) => {
                if (response.status === 200) {
                    setExpenses(response.data);
                } else {
                    setErrors("Error fetching expenses");
                }
            })
            .catch((error) => {
                setErrors(error.message);
                console.error("Error fetching expenses:", error);
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);
    return { expenses, error, isLoading };
};
export default useExpenses;
