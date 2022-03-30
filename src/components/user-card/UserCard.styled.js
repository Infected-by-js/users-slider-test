import styled from 'styled-components';
import {color, fontWeight} from '../../helpers/constants';

export const Wrapper = styled.div``;

export const ImageContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;

    bottom: 0;
    left: 0;
    background-color: ${color.orange};
    width: 100%;
    height: 5px;
    transition: opacity 200ms ease;

    opacity: ${({isActive}) => (isActive ? 1 : 0)};
  }

  ${Wrapper}:hover &::after {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const Name = styled.p`
  font-weight: ${fontWeight.m};
  font-size: 24px;
  line-height: 36px;
  transition: color 200ms ease;
  color: ${({isActive}) => (isActive ? color.orange : color.black)};
`;

export const Company = styled.p`
  font-weight: ${fontWeight.s};
  font-size: 18px;
  line-height: 27px;
  transition: color 200ms ease;
  color: ${({isActive}) => (isActive ? color.orange : color.grey)};
`;
