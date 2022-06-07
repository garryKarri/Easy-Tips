import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useSelector } from 'react-redux';
import Dashboard from '../DashboardSidebar/Dashboard';

export default function qrCode() {
  const user = useSelector((state) => state.user);
  const [src, setSrc] = useState('');
  useEffect(() => {
    user && QRCode.toDataURL(`http://localhost/lk/${user.id}`).then((data) => {
      setSrc(data);
    });
  }, []);
  return (
    <>
      <Dashboard />
      <div style={{
        height: '50vw', justifyContent: 'center', display: 'flex', alignItems: 'inherit',
      }}
      >

        <center>
          <h1>Мой QR-code</h1>
          <p>Это ваш персональный QR код для приема чаевых.</p>
          <div style={{
            height: '300px', width: '300px', justifyContent: 'center', display: 'flex', alignItems: 'center', border: '2px solid grey ', boxShadow: '4px 0px 4px grey',
          }}
          >
            <img style={{ height: '300px', width: '300px' }} src={src} alt="qrcode" />
          </div>
          <div>
            <a className="btn btn-dark my-3" href={src} download>Download</a>
          </div>
        </center>
      </div>
    </>
  );
}



