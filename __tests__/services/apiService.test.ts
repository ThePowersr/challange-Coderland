import axios from 'axios';
import { fetchElements, User } from '../../src/services/apiService';

jest.mock('axios');

describe('fetchElements', () => {
  it('should fetch users successfully', async () => {
    const mockUsers: User[] = [
      {
        createdAt: '2021-01-01',
        name: 'User 1',
        avatar: 'avatar1.png',
        id: '1',
      },
      {
        createdAt: '2021-01-02',
        name: 'User 2',
        avatar: 'avatar2.png',
        id: '2',
      },
    ];

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockUsers,
    });

    const users = await fetchElements();
    expect(users).toEqual(mockUsers);
  });

  it('should handle error during fetch', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchElements()).rejects.toThrow('Error fetching elements');
  });
});
