import styled, {css} from 'styled-components';
import arrowIcon from '../../assets/arrow.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Arrow = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-image: url(${arrowIcon});
  cursor: pointer;

  transform: ${({direction}) =>
    direction === 'left' ? 'scale(-1)' : 'scale(1)'};
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;

  &:hover {
    transform: ${({direction}) =>
      direction === 'left' ? 'scale(-1.2)' : 'scale(1.1)'};
  }

  ${({disable}) =>
    disable &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: none;
    `}
`;
