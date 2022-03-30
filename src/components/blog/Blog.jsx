import * as S from './Blog.styled';

export const Blog = ({title, body}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Body>{body}</S.Body>
    </S.Wrapper>
  );
};
