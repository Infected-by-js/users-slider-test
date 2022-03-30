import {useEffect, useState} from 'react';
import UserService from '../../api/UserService';
import {BgImage, Blog} from '../../components';

import BgElementImage from '../../assets/bg-element.svg';
import QuotesImage from '../../assets/quotes.svg';

import * as S from './BlogsSection.styled';
import {useFetching} from '../../hooks/useFetching';

export const BlogsSection = ({userName, activeUserId}) => {
  const [userPosts, setUserPosts] = useState([]);

  const [getPosts, isLoading] = useFetching(async () => {
    const posts = await UserService.getUserPosts(activeUserId, 3);
    setUserPosts(posts);
  });

  useEffect(() => {
    getPosts();
  }, [activeUserId]);

  return (
    <S.BlogsSection>
      <BgImage src={BgElementImage} top="100" left="-500" />
      <BgImage src={QuotesImage} top="0" left="-150" />
      <S.BlogsTitle>3 актуальных поста {userName}</S.BlogsTitle>
      <S.BlogList>
        {isLoading ? (
          <h2>Loading posts...</h2>
        ) : (
          userPosts.map(({id, title, body}) => (
            <S.BlogItem key={id}>
              <Blog title={title} body={body} />
            </S.BlogItem>
          ))
        )}
      </S.BlogList>
    </S.BlogsSection>
  );
};
