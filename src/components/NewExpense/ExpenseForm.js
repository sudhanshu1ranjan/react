import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label for="title">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              id="title"
            />
          </div>
          <div className="new-expense__control">
            <label for="amount">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              id="amount"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label for="date">Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              id="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
          <div className="new-expense__actions">
            <button
              type="button"
              onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
