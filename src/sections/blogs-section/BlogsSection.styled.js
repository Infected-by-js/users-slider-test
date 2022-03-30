import styled from 'styled-components';
import {color, device, fontWeight} from '../../helpers/constants';

export const BlogsSection = styled.section`
  position: relative;

  @media ${device.laptop} {
    margin-left: 305px;
  }
`;

export const BlogsTitle = styled.h2`
  margin-bottom: 45px;
  font-size: 2rem;
  line-height: 1;
  color: ${color.black};
  font-weight: ${fontWeight.l};

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

export const BlogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BlogItem = styled.li``;
