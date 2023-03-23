import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredData) => {
    const expenseDate = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(expenseDate);
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
