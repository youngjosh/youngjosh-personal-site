import React from "react";
import styled from "styled-components";

export interface WrappedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WrapperProps {
  width: number;
  height: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  height: 0;
  padding-top: calc(${props => props.height} / ${props => props.width} * 100%);
  max-width: ${props => props.width}px;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
`;

const WrappedImage: React.SFC<WrappedImageProps> = ({
  src,
  alt,
  width,
  height
}) => {
  return (
    <Wrapper height={height} width={width}>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

export default WrappedImage;
