import ExpenseMain from "./ExpenseMain";
import Import from "./ExpenseImport";
import { Route, Routes } from "react-router-dom";

const Expenses = () => {
  return (
    <Routes>
      <Route path="/" element={<ExpenseMain />} />
      <Route path="import" element={<Import />} />
    </Routes>
  );
};

export default Expenses;
