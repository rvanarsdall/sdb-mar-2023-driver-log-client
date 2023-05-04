import { Col, Container, Row } from "reactstrap";
import LogCreate from "./LogCreate";
import LogTable from "./LogTable";

const LogIndex = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <LogCreate token={props.token} />
          </Col>
          <Col md="8">
            <LogTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogIndex;
