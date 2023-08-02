export type User = {
  name: string;
  username: string;
  email: string;
  img: object;
  age?: number;
  weight?: number;
  height?: number;
  followers?: string[];
  following?: string[];
  biography?: string;
};
