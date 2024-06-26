import axios, { AxiosResponse } from "axios";

export interface User {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  username?: string;
  password?: string;
}

type userResponse = AxiosResponse<User[]>;

const API_URL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

export const fetchElements = async (): Promise<User[]> => {
  try {
    const response: userResponse = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching elements');
  }
}
