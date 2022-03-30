import styled from 'styled-components';
import {color, fontWeight} from '../../helpers/constants';

export const Header = styled.header``;
export const Title = styled.h1`
  margin-bottom: 45px;
  text-align: center;
  font-size: 3rem;
  line-height: 1;
  color: ${color.black};
  font-weight: ${fontWeight.l};
`;

export const Description = styled.p`
  font-weight: ${fontWeight.m};
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: ${color.grey};
  width: 433px;
  margin: 0 auto 30px;
`;
