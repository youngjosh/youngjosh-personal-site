import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Self from "./self-portrait.png";
import ContentContainer, {
  ContentHeader,
  ContentSubheader
} from "../components/ContentContainer";
import WrappedImage from "../components/WrappedImage";

export interface HomeProps {
  color: string;
}

const IMAGE_HEIGHT = 218;

const CenterDiv = styled.div`
  margin: auto;
  height: ${IMAGE_HEIGHT}px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Home: FunctionComponent<HomeProps> = ({ color }) => {
  color = "#3b27ba";
  return (
    <ContentContainer color={color}>
      <ContentHeader color={color}>Joshua Young</ContentHeader>
      <div style={{ marginBottom: "20px" }}>
        <CenterDiv>
          <WrappedImage
            src={Self}
            alt="Joshua Young"
            height={IMAGE_HEIGHT}
            width={IMAGE_HEIGHT}
          />
        </CenterDiv>
        <p>
          Full Stack Software Engineer
          <br />
          Employed at Zeren, Chapman Tripp's innovation team.
        </p>
        <br />
        <ContentSubheader color={color}>Technical</ContentSubheader>
        <p>
          JavaScript/TypeScript + React + Redux
          <br />
          Java + Springboot
          <br />
          DevOps + CI/CD Azure Pipelines
        </p>
        <br />
        <ContentSubheader color={color}>Relational</ContentSubheader>
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
