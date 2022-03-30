import {useState} from 'react';

import {useSlider} from '../../hooks/useSlider';
import {UserCard} from '../user-card/UserCard';

import {SliderControls} from './SliderControls';

import * as S from './Slider.styled';

export const Slider = ({items, activeItem, changeActiveItem}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const {slideInView, gap, sliderRef} = useSlider();

  const isFirstSlide = () => slideIndex === 0;
  const isLastSlide = () => slideIndex >= items.length - slideInView;

  const handleActiveUser = (id) => {
    changeActiveItem(id);
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (slideIndex < items.length - slideInView) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  return (
    <S.Wrapper>
      <SliderControls
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        isFirstSlide={isFirstSlide()}
        isLastSlide={isLastSlide()}
      />
      <S.SliderContent ref={sliderRef}>
        <S.SliderTrack slideIndex={slideIndex} gap={gap}>
          <S.List gap={gap}>
            {items.map(({id, name, company}) => (
              <S.Item key={id}>
                <UserCard
                  isActive={activeItem === id}
                  id={id}
                  name={name}
                  company={company?.name}
                  changeActiveUser={handleActiveUser}
                />
              </S.Item>
            ))}
          </S.List>
        </S.SliderTrack>
      </S.SliderContent>
    </S.Wrapper>
  );
};
