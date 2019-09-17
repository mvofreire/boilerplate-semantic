import React from "react";
import { SectionContent, HeaderBackButton } from "components";
import { Row, Col } from "@hbsis.uikit/react";
import { withRouter } from "react-router-dom";

export const SectionContentAdminHeaderComponent = ({
  children,
  title,
  subTitle = null,
  backButton = false,
  align = "center",
  justify = "flex-end",
  history
}) => (
  <SectionContent name="admin-header">
    <Row type="flex" justify="center" align="middle">
      <Col xs={10}>
        <span>{title}</span>
        <br />
        <span>{subTitle}</span>
      </Col> 
      <Col xs={14}>
        <div
          style={{
            lineHeight: "64px",
            height: 64,
            maxHeight: 64,
            alignItems: align,
            display: "flex",
            justifyContent: justify
          }}
        >
          {children}
        </div>
      </Col>
    </Row>
  </SectionContent>
);

const SectionContentAdminHeader = withRouter(
  SectionContentAdminHeaderComponent
);
export { SectionContentAdminHeader };
