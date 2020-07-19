import React, { FunctionComponent } from "react";
import ContentContainer, {
  ContentHeader
} from "../components/ContentContainer";

export interface ContactProps {
  color: string;
}

const Contact: FunctionComponent<ContactProps> = ({ color }) => {
  color = "#FF9472";
  return (
    <ContentContainer color={color}>
      <ContentHeader color={color}>Contact Me</ContentHeader>
      <p>I would link to some social media but let's be real you don't care</p>
    </ContentContainer>
  );
};

export default Contact;
