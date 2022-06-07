import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSetChart } from '../../../redux/actions/chartAction';
import './style.css';

function TipsCard() {
  const { id } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const result = useSelector((state) => state.chart);
  const [sum, setSum] = useState(0);
  const [allPay, setAllPay] = useState(0);

  useEffect(() => {
    dispatch(thunkSetChart(id));
  }, []);

  useEffect(() => {
    if (result[0]) { setSum(result.reduce((acc, el) => acc + el.tipSize, 0)); }
  }, [result]);
  useEffect(() => {
    if (result[0]) { setAllPay(result.length); }
  }, [result]);
  return (
    <div
      className="col-sm-6"
      style={{
        display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '40px', marginBottom: '30px',
      }}
    >
      <div
        className="card"
        style={{
          border: '4px solid black',
          marginLeft: '576px',
          height: '150px',
          width: '250px',
          borderRadius: '25px',
          backgroundColor: 'black',
          color: 'antiquewhite',
        }}
      >
        <br />
        <p className="uk-card-title">
          Всего принято чаевых:
          {' '}

          <h1>
            {sum}
            {' '}
            руб.
          </h1>
        </p>
      </div>
      <div
        className="card"
        style={{
          border: '4px solid black',
          marginRight: '250px',
          height: '150px',
          width: '250px',
          borderRadius: '25px',
          backgroundColor: 'black',
          color: 'antiquewhite',
        }}
      >
        <br />
        <p className="uk-card-title">
          {' '}
          Всего платежей:
          {' '}
          <h1>{allPay}</h1>
        </p>
      </div>
    </div>

  );
}

export default TipsCard;
