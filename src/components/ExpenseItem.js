import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "./Card";
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
