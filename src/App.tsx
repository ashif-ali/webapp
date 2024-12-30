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
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/new" element={<NewExpense />} />
                <Route path="/view" element={<ExpenseDetails />} />
                <Route path="/reports" element={<ExpenseReports />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
