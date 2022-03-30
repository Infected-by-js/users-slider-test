import styled from 'styled-components';
import {device, fontWeight} from '../../helpers/constants';

export const Wrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: ${fontWeight.m};
  font-size: 20px;
  line-height: 22px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
`;
export const Body = styled.p`
  font-weight: ${fontWeight.s};
  font-size: 18px;
  line-height: 20px;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 28px;
  }
`;
