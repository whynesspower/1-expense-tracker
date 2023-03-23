import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredtTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  const AmtChngHandler = (e) => {
    setEneteredAmount(e.target.value);
  };
  const DtChngeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEneteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={AmtChngHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-03-23"
            value={enteredDate}
            onChange={DtChngeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
