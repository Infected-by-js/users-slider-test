import {BgImage, Slider} from '../../components';

import BgElement from '../../assets/bg-element.svg';
import * as S from './SliderSection.styled';

export const SliderSection = ({items, activeItem, changeActiveItem}) => {
  return (
    <S.SliderSection>
      <BgImage src={BgElement} top="0" right="-150" />
      <Slider
        items={items}
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
      />
    </S.SliderSection>
  );
};
