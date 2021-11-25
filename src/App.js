import "./App.css";
import ExpnseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 356,
      date: new Date(2021, 8, 28),
    },
    { id: "e2", title: "New TV", amount: 356, date: new Date(2021, 10, 28) },
    { id: "e3", title: "Radio", amount: 240, date: new Date(2021, 8, 28) },
    { id: "e4", title: "New tyres", amount: 365, date: new Date(2021, 2, 28) },
  ];

  return (
    <div className="App">
      <ExpnseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpnseItem>
      <ExpnseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpnseItem>
      <ExpnseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpnseItem>
    </div>
  );
}

export default App;
