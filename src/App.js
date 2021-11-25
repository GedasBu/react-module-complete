import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


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
  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"Lets start"),
  //   React.createElement(Expenses,{items:expenses})
  //   );

  return (
    <div >
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
