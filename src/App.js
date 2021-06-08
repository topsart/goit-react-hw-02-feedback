import React from "react";

import Profile from "./components/Profile/Profile";
import user from "./user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";

import FriendList from "./components/Friends/FriendList";
import friends from "./friends.json";

import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
