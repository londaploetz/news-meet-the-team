import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Search'
import './navigation.css';

function Navigation() {
  return (

    <Navbar className="navbar-container" variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Nav >

          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="="
              menuVariant="dark"
              className="party"
            >
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">


                <NavDropdown
                  id="nav-dropdown-dark-example2"
                  title="News"
                  menuVariant="dark"
                >

                </NavDropdown>

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Livestream</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">News 6 On Your Side</NavDropdown.Item>
            </NavDropdown>


          </Navbar.Collapse>
          <Nav.Link href="#weather">First Alert Weather</Nav.Link>
          <Nav.Link href="#sports">Sports</Nav.Link>
          <Nav.Link href="#local">We Are Local</Nav.Link>
          <Nav.Link href="#election">Election Results</Nav.Link>
          <Nav.Link href="#omaha">Omaha Everyday</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>

        </Nav>
        <Search />
      </Container>

    </Navbar>

  );
}

export default Navigation;

