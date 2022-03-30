import {useEffect, useMemo, useState} from 'react';
import UserService from './api/UserService';
import {Container} from './components';
import {Header, BlogsSection, SliderSection} from './sections';
import {useFetching} from './hooks/useFetching';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState(1);

  const [getUsers, isLoading] = useFetching(async () => {
    const users = await UserService.getUsers();
    setUsers(users);
  });

  useEffect(() => {
    getUsers();
  }, []);

  const changeActiveUser = (id) => {
    setActiveUserId(id);
  };

  const user = useMemo(() => {
    return users.find(({id}) => id === activeUserId);
  }, [users, activeUserId]);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <SliderSection
            items={users}
            activeItem={activeUserId}
            changeActiveItem={changeActiveUser}
          />
          <BlogsSection userName={user?.name} activeUserId={activeUserId} />
        </>
      )}
    </Container>
  );
};
