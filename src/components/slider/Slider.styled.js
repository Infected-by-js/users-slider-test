import styled from 'styled-components';
import {CARD_WIDTH} from '../../helpers/constants';

export const Wrapper = styled.div``;

export const SliderContent = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 300px;
  overflow: hidden;
`;
export const SliderTrack = styled.div`
  transition: transform 200ms linear;
  transform: translateX(
    ${({gap, slideIndex}) => (CARD_WIDTH + gap) * -slideIndex}px
  );
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({gap}) => gap}px;
  transition: transform 200ms linear;

  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  transition: transform 200ms linear;
  transform: translate(0);
`;

export const Item = styled.li``;
