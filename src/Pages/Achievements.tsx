import React, { FunctionComponent } from "react";
import ContentContainer, {
  ContentHeader
} from "../components/ContentContainer";

export interface AchievementsProps {
  color: string;
}

const Achievements: FunctionComponent<AchievementsProps> = ({ color }) => {
  color = "#E847AE";
  return (
    <ContentContainer color={color}>
      <ContentHeader color={color}>Achievements</ContentHeader>
      <p>Who am I kidding, I don't have any..</p>
    </ContentContainer>
  );
};

export default Achievements;
