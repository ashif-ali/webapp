import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import DashboardStatus from "./DashboardStatus";

function Dashboard() {
    const loggedInUser: string = "ashif@gmail.com";

    const { expenses, error, isLoading } = useExpenses();

    const totalExpenses = expenses.reduce(
        (acc, expense) => acc + expense.amount,
        0
    );

    return (
        <div className="container">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <DashboardStatus
                loggedInUser={loggedInUser}
                totalExpenses={totalExpenses}
            />
            <hr />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default Dashboard;
