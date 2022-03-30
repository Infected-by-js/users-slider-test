import styled from 'styled-components';

export const BgImageElement = styled.img`
  position: absolute;

  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  right: ${({right}) => right}px;
  bottom: ${({bottom}) => bottom}px;
`;
