import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> March 23rd, 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance </h2>
        <div className="expense-item__price">$294.93</div>
      </div>
    </div>
  );
}
