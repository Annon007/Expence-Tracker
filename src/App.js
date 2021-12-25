// import logo from './logo.svg';
import React, { useState } from "react";

import styles from './App.module.css';
import Expences from './components/Expences/Expences';
import NewExpence from "./components/NewExpence/NewExpence";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [updateExpences, setUpdateExpences] = useState(dummyExpenses);

  const pushingToExpence = (data) => {
    console.log(data);
    setUpdateExpences(preExpences => {
      return [data, ...preExpences]
    });
  };
  console.log(updateExpences)
  return (
    <div className={styles.appContainer}>
      <NewExpence onRenderExpenceList={pushingToExpence} />
      <Expences expence={updateExpences} />

    </div>
  );
}

export default App;
