import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/main.module.css";

const Main = () => {
  return (
    <section className={`${classes.main}`}>
      <Container>
        <Row>
          {/* ========== main content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.main__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">We are MJ</h2>
              <h5 className="mb-4">App builders</h5>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Main;
