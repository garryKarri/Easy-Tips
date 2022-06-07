import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import FeedbackIcon from '@mui/icons-material/Feedback';

import Pagination from '../Pagination';
import { addReviewToDB } from '../../../redux/actions/reviewAction';

export default function Review({ id, modalClose,starsValue }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState('');
  console.log(formData);

  const [open, setOpen] = useState(true);
  const sendHandler = () => {
    const post = {
      text: formData,
      stars: starsValue,
    };
    dispatch(addReviewToDB(id, post));
    setFormData('');
    modalClose();
  };

  const handleChange = () => setOpen((prev) => !prev);
  const inputHandler = (e) => setFormData(e.target.value);

  const feedback = useSelector((state) => state.review);
  const [countriesPerPage] = useState(5);
  const [currenPage, setCurrentPage] = useState(1);
  const lastCountryIndex = currenPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentFeedback = feedback.slice(firstCountryIndex, lastCountryIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentFeedback);

  return (
    <div className="modalcenter">

      <div className="modalRev">
        {open && (

        <Form.Control
          value={formData}
          style={{ marginBottom: '20px' }}
          placeholder="ОСТАВИТЬ ОТЗЫВ"
          onChange={inputHandler}
          type="text"
        />
        )}
        {open && (
        <div className="review">
          <ListGroup style={{ margin: '20px' }}>
            {currentFeedback.map((variant) => (
              variant.text.length > 0 && (
              <ListGroup.Item
                style={
                  variant.stars < 2
                    ? {
                      backgroundColor: '#d30000', color: '#F0FFFF	', width: '250px', wordWrap: 'break-word',
                    }
                    : variant.stars <= 3
                      ? {
                        backgroundColor: 'grey', color: '#F0FFFF	', width: '250px', wordWrap: 'break-word',
                      }
                      : variant.stars < 4
                        ? {
                          backgroundColor: '#4169E1', color: '#F0FFFF', width: '250px', wordWrap: 'break-word',
                        }
                        : {
                          backgroundColor: '#42bd41', color: '#F0FFFF', width: '250px', wordWrap: 'break-word',

                        }
                }
                key={variant.id}
              >
                {variant.text}
              </ListGroup.Item>

              )

            ))}
            <Pagination
              paginate={paginate}
              feedback={feedback.length}
              countriesPerPage={countriesPerPage}
            />
          </ListGroup>
          <Button onClick={sendHandler} style={{ backgroundColor: '#blue', marginTop: '10px' }} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        )}
      </div>
    </div>

  );
}
