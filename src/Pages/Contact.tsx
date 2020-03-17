import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";

export interface ContactProps {
  color: string;
}

const StyledHeader = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.color};
`;

const StyledSubheader = styled.p`
  color: ${props => props.color};
`;

const Contact: FunctionComponent<ContactProps> = ({ color }) => {
  color = "#FF9472";
  return (
    <ContentContainer color={color}>
      <StyledHeader color={color}>Contact Me</StyledHeader>
      <div>
        <p>Insta Link</p>
        <br />
        <StyledSubheader color={color}>Technical</StyledSubheader>
        <p>
          JavaScript/TypeScript + React + Redux
          <br />
          Java + Springboot
          <br />
          DevOps + CI/CD Azure Pipelines
        </p>
        <br />
        <StyledSubheader color={color}>Relational</StyledSubheader>
        Worked directly with large business clients <br />
        (Live Demo, Training, Support, Solution Design)
        <br />
        Outgoing, Strong Communicator
        <br />
      </div>
    </ContentContainer>
  );
};

export default Contact;
