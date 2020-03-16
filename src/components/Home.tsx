import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Self from "./self-portrait.png";

export interface HomeProps {}

const StyledDiv = styled.div`
  background-color: white;
  width: 500px;
  text-align: center;
  padding: 25px;
  border: 2px solid #3b27ba;
  border-radius: 0.1em;
  min-height: 600px;
  margin-left: 5px;
  margin-right: 155px;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 10px #3b27ba;
  }
`;

const StyledHeader = styled.h1`
  margin-bottom: 20px;
  color: #3b27ba;
`;

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <StyledDiv>
      <StyledHeader>Joshua Young</StyledHeader>
      <div>
        <img src={Self} alt="Joshua Young" />
        <p>
          Full Stack Software Engineer
          <br />
          Employed at Zeren, Chapman Tripp's innovation team.
        </p>
        <br />
        <p style={{ color: "#3b27ba" }}>Technical</p>
        <p>
          JavaScript/TypeScript + React + Redux
          <br />
          Java + Springboot
          <br />
          DevOps + CI/CD Azure Pipelines
        </p>
        <br />
        <p style={{ color: "#3b27ba" }}>Relational</p>
        Worked directly with large business clients <br />
        (Live Demo, Training, Support, Solution Design)
        <br />
        Outgoing, Strong Communicator
        <br />
      </div>
    </StyledDiv>
  );
};

export default Home;
