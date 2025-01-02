import { Link } from "react-router-dom";
import { Expense } from "../model/Expense";
import CurrencyUtils from "../utils/CurrencyUtils";
import DateUtils from "../utils/DateUtils";

interface Props {
    expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
    return (
        <div className="card">
            <h5 className="card-header">
                Expense
                <span className="float-end">Amount</span>
            </h5>

            <div className="card-body">
                {expenses.map((expense) => (
                    <Link
                        key={expense.expenseId}
                        to={`/view/${expense.expenseId}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="d-flex justify-content-between border-bottom-1 p-3">
                            <div className="card-title m-0">
                                <h5>{expense.name}</h5>
                                <span className="fst-italic">
                                    {DateUtils.formatDateString(expense.date)}
                                </span>
                            </div>
                            <div className="card-subtitle">
                                <span className="badge app-primary-bg-color">
                                    {CurrencyUtils.formatToINR(expense.amount)}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
