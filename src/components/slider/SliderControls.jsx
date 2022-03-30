import * as S from './SliderControls.styled';

export const SliderControls = (props) => {
  const {isFirstSlide, isLastSlide, handleNextSlide, handlePrevSlide} = props;

  return (
    <S.Wrapper>
      <S.Arrow
        direction="left"
        onClick={handlePrevSlide}
        disable={isFirstSlide}
      />
      <S.Arrow
        direction="right"
        onClick={handleNextSlide}
        disable={isLastSlide}
      />
    </S.Wrapper>
  );
};
