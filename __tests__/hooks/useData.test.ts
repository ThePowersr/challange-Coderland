import { renderHook, act } from '@testing-library/react-hooks';
import useData from '../../src/hooks/useData';
import { fetchElements } from '../../src/services/apiService';

// Mockear fetchElements
jest.mock('../../src/services/apiService');

describe('useData hook', () => {
  it('should return initial state', async () => {
    const { result } = renderHook(() => useData());

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('should fetch data successfully', async () => {
    const mockUsers = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' },
    ];

    (fetchElements as jest.Mock).mockResolvedValueOnce(mockUsers);

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle error during fetch', async () => {
    const errorMessage = 'Failed to fetch data';

    (fetchElements as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
  });

  it('should handle unknown error during fetch', async () => {
    (fetchElements as jest.Mock).mockRejectedValueOnce('unknown error');

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('An unknown error occurred');
  });
});
