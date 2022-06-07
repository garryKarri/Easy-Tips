/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/actions/userAction';
import Photo from '../cards/photo/Photo';

function Dashboard() {
  const {
    image, id, userName, surname,
  } = useSelector((state) => state.user);
  const x = useSelector((state) => state.user);
  console.log(x, 'ahahahahahha');

  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem('userData'); // clear localstorage
    dispatch(signOut());
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <center >
            <div className="position-sticky pt-3">
              <div>
                <Photo image={image} />
              </div>
              <h2 className="nav-link">
                {userName}
                {surname}
              </h2>
              <span>
                http://localhost:3000/lk/
                {`${id}`}
              </span>
              <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-center align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Меню</span>
                  <a className="link-secondary" ariaLabel="Add a new report">
                    <span data-feather="plus-circle" />
                  </a>
                </h6>
                <li className="nav-item nav-link">

                  <Link to="/desktop">
                    <span data-feather="home" />
                    Рабочий стол
                  </Link>

                </li>
                <li className="nav-item nav-link">

                  <Link to="/settings">
                    <span data-feather="file" />
                    Настроить профиль
                  </Link>

                </li>
                <li className="nav-item nav-link">

                  <Link to="/myqrcode">

                    <span data-feather="shopping-cart" />
                    Мой QR код

                  </Link>

                </li>
                <li className="nav-item nav-link">
                  <Link to={`/lk/${id}`}>
                    <span data-feather="users" />
                    Посмотреть онлайн
                  </Link>
                </li>
                <li className="nav-item nav-link">
                  <span data-feather="users" />
                  <Link to="/signin" onClick={logoutHandler}>Выйти</Link>
                </li>
              </ul>

            </div>
          </center>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
