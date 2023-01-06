import "./ExpenseItem.css";
// import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle("Updated!")
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div class="expense-item__description">
        <h2>{props.title}</h2>
        <div class="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
