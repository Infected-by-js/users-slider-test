import styled from 'styled-components';
import {device, size} from '../../helpers/constants';

export const Wrapper = styled.div`
  width: 100%;
  margin: 3rem auto;
  padding: 0 1rem;

  @media ${device.tablet} {
    max-width: ${size.tablet};
  }
  @media ${device.laptop} {
    max-width: ${size.laptop};
  }
  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
`;
