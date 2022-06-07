import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Photo from '../cards/photo/Photo';

function SideBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <center>
            <div className="position-sticky pt-3">
              <div>
                <Photo />
              </div>


              <h2 className="nav-link">User name</h2>
              <span>http://localhost:3000/desktop#</span>
              <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Меню</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle" />
                  </a>
                </h6>
                <li className="nav-item nav-link">

                  <Link to="/desktop">
                    <span data-feather="home" />
                    Рабочий стол
                  </Link>

                </li>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Мои заведения</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle" />
                  </a>
                </h6>
                <li className="nav-item nav-link">

                  <Link to="/settings">
                    <span data-feather="file" />
                    Настроить
                  </Link>

                </li>
                <li className="nav-item nav-link">

                  <Link to="/myqrcode">

                    <span data-feather="shopping-cart" />
                    Мой QR код

                  </Link>

                </li>
                <li className="nav-item nav-link">
                  <Link to="/lk">
                    <span data-feather="users" />
                    Посмотреть онлайн
                  </Link>
                </li>
              </ul>

            </div>
          </center>
        </nav>
      </div>
    </div>

  );
}

export default SideBar;
