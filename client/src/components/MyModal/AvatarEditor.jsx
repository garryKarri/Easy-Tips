import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editAvatar } from '../../redux/actions/userAction';
import Photo from '../cards/photo/Photo';
import { NavBtn, NavBtnLink } from '../header/HeaderElement';
import './Modal.style.css';

function AvatarEditor({ flag }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, image } = useSelector((state) => state.user);
  const [img, setImg] = useState(null);
  const changeImgHandler = (e) => {
    setImg(e.target.files[0]);
  };
  const submitHandler = () => {
    dispatch(editAvatar({ image: img, id }));
    flag('');
    navigate('/desktop');
  };
  return (
    <center className="modalPhoto">
      <Photo image={image} />
      <h4 style={{ color: 'whitesmoke'  , paddingTop:'10px' }}>Сменить аватар</h4>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',
      }}
      >

        <input type="file" name="img" onChange={changeImgHandler} />
        {/* <Button variant="warning" onClick={submitHandler}>Сменить</Button> */}
        <NavBtn>
          <NavBtnLink to="#" onClick={submitHandler}>Сменить</NavBtnLink>
        </NavBtn>
      </div>

    </center>
  );
}

export default AvatarEditor;
