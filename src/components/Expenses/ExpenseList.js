import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <ul>
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No expenses found!!!</h2>
      ) : (
        props.items.map((expense) => (
          <ul className="expenses-list">
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </ul>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
