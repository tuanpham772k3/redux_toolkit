import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import { isSetMode } from '../../Redux/Theme/ThemeSlice';
import { useEffect } from 'react';

const Header = () => {
  const mode = useAppSelector(state => state.theme.mode);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const root = document.querySelector("body")
    if (root) {
      root.setAttribute("data-bs-theme", mode)
    } else {
      console.log("không tồn tại");
    }
  }, [mode])
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  defaultChecked={mode === "light" ? false : true}
                  label={mode === "light" ? "Light Mode" : "Dark mode"}
                  onChange={(e) =>
                    dispatch(
                      isSetMode(e.target.checked === true ? "dark" : "light")
                    )
                  }
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header


