import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Carous from './Components/Carous';
import Chiffres from './Components/Chiffres';
import Footer from './Components/Footer';
import SectionOne from './Components/SectionOne';
import SectionTow from './Components/SectionTow';
import Team from './Components/Team';
import TeamTow from './Components/TeamTow';

function App() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      console.log(window.innerWidth);
    });
  }, []);
  console.log(isMobile)
  return (
    <div className='menu'>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">COGEFI CONSULTING</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#s1">Accueil</Nav.Link>
              <Nav.Link href="#s2">Notre cabinet</Nav.Link>
              <Nav.Link href="#pricing">Nos Sevices</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carous />
      <div id='s1'>
        <SectionOne />
      </div>
      <div id='s2'>
        <SectionTow />
      </div>

      <Chiffres />
      {isMobile ? <TeamTow /> : <Team />}
      {/* <Team/> */}




      <Footer />
    </div>
  );
}

export default App;
