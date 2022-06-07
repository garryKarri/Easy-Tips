/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { thunkSetChart } from '../../../redux/actions/chartAction';

function GetPayStat(arr) {
  // const blya = arr.map((el) => el.createdAt);
  // const bla = blya.map((el) => new Date(el));
  // const dateSrt = bla.map((el) => `${el.getDate()}.${el.getMonth() + 1}.${el.getFullYear()}`);
  // let date = [...arr];
  // date = date.map((e, i) => e.data = dateSrt[i]);
  console.log(arr);
  return arr.map((el) => ({
    tipSize: el.tipSize,
    data: `${new Date(el.data).getDate()}.${new Date(el.data).getMonth() + 1}.${new Date(el.data).getFullYear()}`,
  }))
    .map((el) => (
      <tr key={Date.now()}>
        <td>{el.data}</td>
        <td>
          {' '}
          <p className="table-done">Выполнено</p>
          {' '}
        </td>
        <td>{el.tipSize}</td>
      </tr>
    ));
}

function PayStat() {
  const { id } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const result = useSelector((state) => state.chart);
  const [pays, setPays] = useState();

  useEffect(() => {
    dispatch(thunkSetChart(id));
  }, []);

  useEffect(() => {
    console.log(GetPayStat(result));
    if (result.length) { setPays(GetPayStat(result)); }
  }, [result]);
  return (
    <Table responsive>
      <thead>
        <th className="text-table">
          Дата
        </th>
        <th className="text-table">
          Статус
        </th>
        <th className="text-table">
          Сумма
        </th>
      </thead>

      <tbody>
        { pays ? pays.map((el) => <>{el}</>) : <h4 className="h4-table">Получите первые чаевые!</h4>}
        {' '}
      </tbody>
    </Table>
  );
}

export default PayStat;
