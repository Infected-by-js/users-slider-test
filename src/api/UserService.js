import axios from './axios';

class UserService {
  async getUsers() {
    try {
      const {data} = await axios.get('/users');

      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async getUserPosts(userId, limit) {
    try {
      const {data} = await axios.get('/posts', {
        params: {userId, _limit: limit},
      });

      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default new UserService();
