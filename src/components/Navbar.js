import React from "react";
import { Navbar, Container} from "react-bootstrap";

const Navbars = () => {
  const name = localStorage.getItem("name") ? localStorage.getItem("name") : "User"

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
  }
  return (
    <div>
      <Navbar expand="lg" className="navbar-section" fixed="top">
        <Container fluid className="px-4">
          <Navbar.Brand href="/github" className="text-white">GitHub Jobs</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <a href="/test" className="text-white p-2">Test  ||</a>
          </Navbar.Text>
            <Navbar.Text className="text-white">
              {name} : <a href="/" className="text-white" onClick={handleLogout}>Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Navbars