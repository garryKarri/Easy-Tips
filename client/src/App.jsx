import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WorkerCard from './components/cards/WorkerCard';
import Header1 from './components/header/Header1';
import SideBar from './components/header/SideBar/SideBar';
import SignIn from './components/signIn/SignIn';
import Desktop from './components/DashboardSidebar/Desktop';
import Map from './components/google.cards/Map';
import QrCode from './components/qrCode/QrCode';
import Settings from './components/Settings/Settings';
import SignUp from './components/signUp/SignUp';
import { getUserFromServer } from './redux/actions/userAction';
import HomePage from './components/HomePage/HomePage';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('userData'));
    // dispatch(setUser(data));
    dispatch(getUserFromServer());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header1 toggle={toggle} />
      <Routes>
        <Route
          path="/map"
          element={<Map />}
        />
        <Route path="/myqrcode" element={<QrCode />} />

        <Route path="/lk/:id" element={<WorkerCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/desktop"
          element={(
            <PrivateRoute>
              {' '}
              <Desktop />
              {' '}
            </PrivateRoute>
)}
        />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/" element={<HomePage />} />

      </Routes>

    </>
  );
}

export default App;
