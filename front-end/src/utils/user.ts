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

export const updateName = async (name: string): Promise<void> => {
  // Updating name
  try {
    const response = await fetch(
      'http://localhost:3000/api/users/update/name?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
        }),
      },
    );
    if (response.ok) {
      console.log('response good');
    } else {
      console.log('name error');
    }
  } catch (error) {
    console.log('error name');
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateUsername = async (username: string): Promise<void> => {
  // Updating username
  try {
    const response = await fetch(
      'http://localhost:3000/api/users/update/username?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
        }),
      },
    );
    if (response.ok) {
      console.log('response good');
    } else {
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('error user');
    }
  }
};

export const updateBiography = async (biography: string): Promise<void> => {
  // Update biography
  try {
    const response = await fetch(
      'http://localhost:3000/api/users/update/biography?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // email: userEmail,
          biography: biography,
        }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      console.log('response good');
    } else {
      const errorMessage = data.message || 'Failed to save biography';
      console.log(errorMessage);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('error bio');
    }
  }
};

export const updateProfilePicture = async (
  profilePicture: string,
): Promise<void> => {
  // Update profile picture
  try {
    const response = await fetch(
      'http://localhost:3000/api/users/update/picture?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      },
    );
    console.log(response);
  } catch (error) {
    if (error instanceof Error) {
    }
  }
};
