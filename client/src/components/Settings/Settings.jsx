import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editInfo } from '../../redux/actions/userAction';
import Dashboard from '../DashboardSidebar/Dashboard';
import './form-validation.css';

function Settings() {
  const navigate = useNavigate();
  const from = { pathname: '/desktop' };

  const { id, userName } = useSelector((state) => state.user);
  console.log(id, userName, 'asassas');

  const [setting, setSettings] = useState({
    userName: '',
    surname: '',
    walletNumber: '',
    vk: '',
    telegram: '',
    about: '',
  });
  const changeHandler = (e) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = { setting, id };
    dispatch(editInfo(payload, navigate, from));
  };
  return (
    <>
      <Dashboard />
      <center>
        <div className="container">
          <main>
            <div
              className="row g-5"
              style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Информация о пользователе</h4>
                <form
                  onSubmit={submitHandler}
                  className="needs-validation"
                  noValidate
                >
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        Имя
                      </label>
                      <input
                        onChange={changeHandler}
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        name="userName"
                        value={setting.name}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Фамилия
                      </label>
                      <input
                        onChange={changeHandler}
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        name="surname"
                        value={setting.surname}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">
                        Номер кошелька
                      </label>
                      <input
                        onChange={changeHandler}
                        value={setting.walletNumber}
                        name="walletNumber"
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small className="text-muted">
                        Номер кошелька можно узнать...
                      </small>
                      <div className="invalid-feedback" />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="email" className="form-label">
                        Предустановленные кнопки с чаевыми
                        <span className="text-muted" />
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="30,50,100"
                      />
                      <small className="text-muted">
                        Через запятую. Кнопки с этими суммами будут показываться
                        на экроне пользователя.
                      </small>
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="country" className="form-label">
                        Пол
                      </label>
                      <select className="form-select" id="country" required>
                        <option value="">Выберите пол</option>
                        <option>Мужской</option>
                        <option>Женский</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        Ссылка на ВК
                      </label>
                      <input
                        onChange={changeHandler}
                        name="vk"
                        value={setting.vk}
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <label htmlFor="lastName" className="form-label">
                        Ссылка на Instagram
                      </label>
                      <input
                        onChange={changeHandler}
                        name="telegram"
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value={setting.telegram}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="lastName" className="form-label">
                        Коротко о себе
                      </label>
                      <input
                        onChange={changeHandler}
                        type="text"
                        name="about"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value={setting.about}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary btn-lg"
                    id="s"
                    type="submit"
                  >
                    Сохранить настройки
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </center>
    </>
  );
}

export default Settings;
