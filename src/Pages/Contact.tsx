import React, { FunctionComponent } from "react";
import ContentContainer, {
  ContentHeader,
} from "../components/ContentContainer";

export interface ContactProps {
  color: string;
}

const Contact: FunctionComponent<ContactProps> = ({ color }) => {
  color = "#FF9472";
  return (
    <ContentContainer color={color}>
      <ContentHeader color={color}>Contact Me</ContentHeader>
      <p>Contact me at joshua@youngjosh.dev</p>
    </ContentContainer>
  );
};

export default Contact;
