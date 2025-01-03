import { Link, useNavigate, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";

const ExpenseDetails = () => {
    const { expenseId } = useParams<{ expenseId: string }>();
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const navigate = useNavigate();

    if (!expenseId) {
        return <p className="text-danger">Invalid Expense Id</p>;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { expense, errors, isLoading, setLoader, setErrors } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useExpenseByExpenseId(expenseId);

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCancel = () => {
        console.log("cancel is clicked");
        setShowDialog(false);
    };

    const handleConfirm = () => {
        setLoader(true);
        deleteExpenseByExpenseId(expenseId)
            .then((response) => {
                if (response && response.status === 204) {
                    navigate("/");
                }
            })
            .catch((error) => setErrors(error.message))
            .finally(() => {
                setLoader(false);
                setShowDialog(false);
            });
    };

    return (
        <div className="container mt-2">
            {isLoading && <p>Loading...</p>}
            {errors && <p className="text-danger">{errors}</p>}
            <div className="d-flex flex-row-reverse mb-2">
                <button className="btn btn-sm btn-danger" onClick={handleClick}>
                    Delete
                </button>
                <button className="btn btn-sm btn-warning mx-2">Edit</button>
                <Link className="btn btn-sm btn-secondary" to="/">
                    Back
                </Link>
            </div>
            <div className="card">
                <div className="card-body p-3">
                    <table className="table table-borderless table-responsive">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{expense?.name || "N/A"}</td>
                            </tr>
                            <tr>
                                <th>Category</th>
                                <td>{expense?.category || "N/A"}</td>
                            </tr>
                            <tr>
                                <th>Amount</th>
                                <td>
                                    {expense?.amount
                                        ? CurrencyUtils.formatToINR(
                                              expense.amount
                                          )
                                        : "N/A"}
                                </td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>
                                    {expense?.date
                                        ? DateUtils.formatDateString(
                                              expense.date
                                          )
                                        : "N/A"}
                                </td>
                            </tr>
                            <tr>
                                <th>Note</th>
                                <td>{expense?.note || "N/A"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ConfirmDialog
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                show={showDialog}
                title="Confirm Delete"
                message={
                    isLoading
                        ? "Deleting expense, please wait..."
                        : "Are you sure want to delete this item?"
                }
            />
        </div>
    );
};

export default ExpenseDetails;
