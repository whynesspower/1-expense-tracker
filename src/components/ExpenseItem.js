import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "./Card";
import { useEffect, useState } from "react";
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [cnt, setCnt] = useState(0);

  const clickHandler = () => {
    const a = "updated" + cnt;
    setTitle(a);
    // cnt = cnt + 1
    setCnt(cnt + 1);
  };
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
