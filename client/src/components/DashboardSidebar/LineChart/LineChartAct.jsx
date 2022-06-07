/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './style.css';
// import LineChart from './LineChart';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
// import UserData from './Data';
import { thunkSetChart } from '../../../redux/actions/chartAction';

function createCharts(arr) {
  const res = {
    labels: [],
    datasets: [{
      id: 1,
      label: 'Ваши чаевые',
      data: [],
      borderColor: 'rgb(0, 0, 0 )',
      backgroundColor: 'rgb(255, 255, 255)',
    }],
  };
  // const newArr = arr.map((el) => el.createdAt);
  // console.log(arr);
  arr.forEach((el) => {
    const bla = new Date(el.createdAt);
    const dateSrt = `${bla.getDate()}.${bla.getMonth() + 1}.${bla.getFullYear()}`;
    if (!res.labels.includes(dateSrt)) { res.labels.push(dateSrt); }
    const i = res.labels.indexOf(dateSrt);
    if (res.datasets[0].data[i]) res.datasets[0].data[i] += el.tipSize;
    else res.datasets[0].data.push(el.tipSize);
  });

  return res;
}

function LineChartAct() {
  const { id } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const result = useSelector((state) => state.chart);
  const [charts, setCharts] = useState({});
  const [emptyCharts] = useState({
    labels: ['Март', 'Апрель', 'Май'],
    datasets: [
      {
        data: [15526, 19111, 25098],
        label: 'Чаевые с нашим приложением',
        borderColor: '#3333ff',
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [5000, 6500, 5000],
        label: 'Чаевые без нашего приложения',
        borderColor: '#ff3333',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
        lineTension: 0.5,
      },
    ],
  });

  useEffect(() => {
    dispatch(thunkSetChart(id));
  }, []);

  useEffect(() => {
    if (result[0]) { setCharts(createCharts(result)); }
  }, [result]);

  return (
    <div className="chart">
      { charts.labels
        ? <Line className="Line" data={charts} /> : <Line className="Line" data={emptyCharts} />}
    </div>
  );
}

export default LineChartAct;
