import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewExpense from "./pages/Expense/NewExpense";
import ExpenseDetails from "./pages/Expense/ExpenseDetails";
import ExpenseReports from "./pages/reports/ExpenseReports";

const App = () => {
    return (
        // Wraps the application with routing functionality
        <BrowserRouter>
            {/* Navbar is displayed on all pages */}
            <Navbar />

            {/* Defines the routes for the application */}
            <Routes>
                {/* Home route that renders the Dashboard component */}
                <Route path="/" element={<Dashboard />} />

                {/* Route for the login page */}
                <Route path="/login" element={<Login />} />

                {/* Route for the register page */}
                <Route path="/register" element={<Register />} />

                {/* Route for adding a new expense */}
                <Route path="/new" element={<NewExpense />} />

                {/* Route for viewing expense details */}
                <Route path="/view/:expenseId" element={<ExpenseDetails />} />

                {/* Route for viewing and generating expense reports */}
                <Route path="/reports" element={<ExpenseReports />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
