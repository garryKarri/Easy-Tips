import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const auth = useSelector((state) => state.user);

  return (
    <>
      {auth ? (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Tips</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
              {/* <Link to="/signin"><Nav.Link href="#pricing">Войти</Nav.Link></Link> */}
              <Link to="/desktop"><Nav.Link href="#features">Личный Кабинет</Nav.Link></Link>
            </Nav>
          </Container>
        </Navbar>
      )
        : (
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Tips</Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to="/signin"><Nav.Link href="#pricing">Войти</Nav.Link></Link>
                {/* <Link to="/desktop"><Nav.Link href="#features">Личный Кабинет</Nav.Link></Link> */}
              </Nav>
            </Container>
          </Navbar>
        )}

    </>

  );
}
