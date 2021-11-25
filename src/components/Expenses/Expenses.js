import ExpnseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";



const Expenses = (props)=> {
 
  return (
    <Card className="expenses">
      <ExpnseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpnseItem>
      <ExpnseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpnseItem>
      <ExpnseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpnseItem>
    </Card>
  );
}

export default Expenses
