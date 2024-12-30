import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import { Expense } from "../../model/Expense";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
    const loggedInUser: string = "ashif@example.com";
    // Destructuring data from the custom hook `useExpenses`
    const { expenses, error, isLoading } = useExpenses();

    const totalExpenses: number = expenses.reduce(
        (acc: number, expense: Expense) => acc + expense.amount,
        0
    );

    return (
        <div className="container">
            {/* Display loading message while data is being fetched */}
            {isLoading && <p>Loading...</p>}

            {/* Display error message if an error occurs */}
            {error && <p>{error}</p>}

            {/* Display the dashboard status component */}
            <DashboardStatus
                loggedInUser={loggedInUser}
                totalExpenses={totalExpenses}
            />

            <hr />

            {/* Display the list of expenses */}
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default Dashboard;
