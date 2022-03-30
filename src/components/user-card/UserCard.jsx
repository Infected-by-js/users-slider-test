import {CARD_WIDTH} from '../../helpers/constants';
import * as S from './UserCard.styled';

export const UserCard = (props) => {
  const {isActive, id, name, company, changeActiveUser} = props;

  const handleActiveUser = () => {
    changeActiveUser(id);
  };

  return (
    <S.Wrapper onClick={handleActiveUser}>
      <S.ImageContainer isActive={isActive}>
        <S.Image
          src={`https://i.pravatar.cc/${CARD_WIDTH}?img=${id}`}
          alt="phot"
        />
      </S.ImageContainer>
      <S.Name isActive={isActive}>{name}</S.Name>
      <S.Company isActive={isActive}>{company}</S.Company>
    </S.Wrapper>
  );
};
