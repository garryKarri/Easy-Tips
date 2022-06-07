import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SendIcon from '@mui/icons-material/Send';
import { AiFillInstagram } from 'react-icons/ai';
import { FaVk } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Ratings from './rating/Ratings';
import Photo from './photo/Photo';
import { findWorkerFromDB } from '../../redux/actions/workerActions';
import Review from './rewiev/Review';
import { addReviewToDB, getReviewsFromDB } from '../../redux/actions/reviewAction';
import MyModalCor from '../MyModal/MyModalCor';
import { setChart, thunkSetTips } from '../../redux/actions/chartAction';

export default function WorkerCard() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const worker = useSelector((state) => state.worker);
  const feedback = useSelector((state) => state.review);

  const [tips, setTips] = useState('');
  const [formData, setFormData] = useState('');
  const [starsValue, setStarsValue] = useState(0);

  const handleChange = (e) => setTips(e.target.value);

  const sendHandler = () => {
    const post = {
      data: new Date(), tipSize: tips,
    };
    dispatch(thunkSetTips({ id, post }));
    setFormData('');
  };

  useEffect(() => {
    dispatch(findWorkerFromDB(id));
    dispatch(getReviewsFromDB(id));
  }, []);
  useEffect(() => {
    const averageStar = (feedback.reduce((acc, el) => acc + el.stars, 0)) / feedback.length;

    setStarsValue(averageStar);
  }, [feedback]);

  const buttons = [15, 30, 50];
  // eslint-disable-next-line no-unused-vars
  const path = 'https://yoomoney.ru/to/';

  return (
    <center style={{ backgroundColor: '#252525', height: '100vh' }} className="workersCard">
      <div className="containerCard">
        <div>
          <Photo image={worker && worker.image} />
        </div>
        <div className="name">
          {' '}
          {worker && worker.userName}
        </div>
        <Ratings value={starsValue} setValue={setStarsValue} />
        <div>

          <small style={{ fontSize: '15px', width: '8px' }}>О cебе:</small>
          <br />
          <small>{worker && worker.aboutWorker }</small>
          <Form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml" target="_blank">
            <input type="hidden" name="receiver" value={worker && worker.walletNumber} />

            <Form.Control name="sum" value={tips} onChange={handleChange} style={{ width: '95%' }} type="number" placeholder="Введите сумму чаевых" />
            <input type="hidden" name="quickpay-form" value="donate" />
            <small>или выберите один из вариантов</small>
            <div>
              {buttons.map((button) => (
                <Button style={{ backgroundColor: '#1C1C1C', marginTop: '10px', marginRight: '5px' }} key={button} onClick={() => setTips(button)} variant="contained" size="small">
                  {`${button}p`}
                </Button>
              ))}
            </div>

            <Button type="submit" style={{ backgroundColor: '#1C1C1C', marginTop: '10px' }} onClick={sendHandler} variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Form>

          <div style={{ marginTop: '10px' }}>
            <MyModalCor id="modalReview" el={<Review id={id} starsValue={starsValue} />}>
              <Button style={{ backgroundColor: '#01bf71', marginTop: '10px' }} variant="contained" endIcon={<FeedbackIcon />}>
                REVIEW
              </Button>
            </MyModalCor>
          </div>
          {/* <Review id={id} formData={formData} setFormData={setFormData} /> */}

          <div className="iconsWorker">
            <AiFillInstagram className="icons" />
            <FaVk className="icons" />
          </div>

        </div>
      </div>
    </center>

  );
}
