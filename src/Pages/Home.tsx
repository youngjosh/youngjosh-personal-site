import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Self from "./self-portrait.png";
import ContentContainer from "../components/ContentContainer";

export interface HomeProps {
  color: string;
}

const StyledHeader = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.color};
`;

const StyledSubheader = styled.p`
  color: ${props => props.color};
`;

const Home: FunctionComponent<HomeProps> = ({ color }) => {
  color = "#3b27ba";
  return (
    <ContentContainer color={color}>
      <StyledHeader color={color}>Joshua Young</StyledHeader>
      <div style={{ marginBottom: "20px" }}>
        <img src={Self} alt="Joshua Young" height="218px" width="218px" />
        <p>
          Full Stack Software Engineer
          <br />
          Employed at Zeren, Chapman Tripp's innovation team.
        </p>
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

export default Home;
