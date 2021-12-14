import { Transaction } from '@types';
import { FC } from 'react';
import s from './TransactionsTable.module.scss';

type Props = {
  transactions: Transaction[];
};

export const TransactionsTable: FC<Props> = ({ transactions }) => {
  const renderTransactions = transactions.map((transaction) => {
    return (
      <tr key={transaction.id.toString()} className={s.row}>
        <td className={s.date}>
          <div>{transaction.transactionDate}</div>
        </td>
        <td className={s.desc}>
          <div>{transaction.transactionDesc}</div>
        </td>
        <td className={s.type}>
          <div>{transaction.transactionType}</div>
        </td>
        <td className={s.amount}>
          <div>{Math.round((+transaction.creditAmount + Number.EPSILON) * 100) / 100}</div>
        </td>
        <td className={s.amount}>
          <div>{Math.round((+transaction.debitAmount + Number.EPSILON) * 100) / 100}</div>
        </td>
        <td className={s.balance}>
          <div>{Math.round((+transaction.balance + Number.EPSILON) * 100) / 100}</div>
        </td>
      </tr>
    );
  });

  return (
    <table className={s.transactionsTable}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th>
            <div>Date</div>
          </th>
          <th>
            <div>Description</div>
          </th>
          <th>
            <div>Type</div>
          </th>
          <th>
            <div>Credit</div>
          </th>
          <th>
            <div>Debit</div>
          </th>
          <th>
            <div>Balance</div>
          </th>
        </tr>
      </thead>
      <tbody className={s.body}>{renderTransactions ?? <div>Error occured</div>}</tbody>
    </table>
  );
};