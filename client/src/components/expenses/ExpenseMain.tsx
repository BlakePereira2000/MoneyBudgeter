import "./ExpenseMain.css";
import { Link } from "react-router-dom";

const ExpenseMain = () => {
  return (
    <div id="expenseBody" className="d-flex align-items-center">
      <h1>This is the expenses page.</h1>
      <Link className="btn btn-primary" to="import">
        Pull in expenses
      </Link>
      <button className="btn btn-primary">View previous expenses</button>
    </div>
  );
};

export default ExpenseMain;
