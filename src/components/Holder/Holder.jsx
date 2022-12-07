import { useState, useEffect } from 'react';

import { Profile } from '../Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from '../Statistics/Statistics';
import data from '../Statistics/data.json';
import { FriendList } from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import css from './Holder.module.css';

export const Holder = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  useEffect(() => {
    document.title = 'GoIT React Homework 1';
  }, []);
  return (
    <div className={css.holder}>
      <ul className={css.selector}>
        <li
          className={activeTab === 'tab1' ? css.selected : css.item}
          onClick={() => setActiveTab('tab1')}
        >
          Profile
        </li>
        <li
          className={activeTab === 'tab2' ? css.selected : css.item}
          onClick={() => setActiveTab('tab2')}
        >
          Statistics
        </li>
        <li
          className={activeTab === 'tab3' ? css.selected : css.item}
          onClick={() => setActiveTab('tab3')}
        >
          Friend List
        </li>
        <li
          className={activeTab === 'tab4' ? css.selected : css.item}
          onClick={() => setActiveTab('tab4')}
        >
          Transaction History
        </li>
      </ul>

      <div className={css.output}>
        {activeTab === 'tab1' ? <Profile user={user} /> : ''}
        {activeTab === 'tab2' ? <Statistics stats={data} /> : ''}
        {activeTab === 'tab3' ? <FriendList friends={friends} /> : ''}
        {activeTab === 'tab4' ? (
          <TransactionHistory items={transactions} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
