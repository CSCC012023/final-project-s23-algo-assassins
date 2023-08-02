import axios from 'axios';
import {User} from '../types/user';

// if user is logged in get user object with '\me' query
export const getUser = async (): Promise<User | undefined> => {
  const url = 'http://localhost:3000/api/users/me';
  try {
    const {data} = await axios.get(url);
    const user: User = {
      name: data.name,
      username: data.username,
      email: data.email,
      img: data.img,
      age: data.age ? data.age : 0,
      weight: data.weight ? data.weight : 0,
      height: data.height ? data.height : 0,
      followers: data.followers ? data.followers : [],
      following: data.following ? data.following : [],
      biography: data.biography ? data.biography : '',
    };
    return user;
  } catch (err) {
    console.log(err);
  }
};
