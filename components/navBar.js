import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



import Link from 'next/link'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link href="/" >
                        <a>
                            {this.props.title}
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/"><a className="nav-link active">Home</a></Link>
                        <Link href="/tree"><a className="nav-link active">Tree</a></Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {this.props.search &&
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    }


                </Navbar.Collapse>
            </Navbar>
        )

    }
}