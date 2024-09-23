import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>To Go Task Management</h1>
                    <h3>Login</h3>
                </Col>
                < Col md={6}>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
  };

  export default LoginPage;