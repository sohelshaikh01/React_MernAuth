import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <div className="max-w-screen-md">
      
      <div className="justify-center max-w-md mt-5">
        <label htmlFor=""> Name</label>
        <input type="text" />
        { children}
      </div>

      {/* <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6} className="card p-5"> 
              { chldren }
          </Col>
      </Row>
      */}

    </div>
  )
}

export default FormContainer;
