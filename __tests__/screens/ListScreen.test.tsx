import React from 'react';
import { render, waitFor } from "@testing-library/react-native";
import ListScreen from "../../src/screens/ListScreen";
import useData from "../../src/hooks/useData";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Mock para useData
jest.mock('../../src/hooks/useData');

describe('ListScreen Test', () => {

  const renderListScreen = () => {
    return render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <ListScreen />
      </SafeAreaProvider>
    )
  }

  it('renders loading indicator', () => {
    // Mock de useData para simular carga
    (useData as jest.Mock).mockReturnValueOnce({
      users: [],
      loading: true,
      error: null,
    });

    const { getByTestId } = renderListScreen();
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error message', async () => {
    const errorMessage = 'Failed to fetch data';

    // Mock de useData para simular error
    (useData as jest.Mock).mockReturnValueOnce({
      users: [],
      loading: false,
      error: errorMessage,
    });

    const { getByText } = renderListScreen();
    await waitFor(() => expect(getByText(`Error: ${errorMessage}`)).toBeTruthy());
  });

  it('renders list of users', async () => {
    const mockUsers = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' },
    ];

    // Mock de useData para simular datos de usuarios
    (useData as jest.Mock).mockReturnValueOnce({
      users: mockUsers,
      loading: false,
      error: null,
    });

    const { getByText, getByTestId } = renderListScreen();
    await waitFor(() => {
      mockUsers.forEach(user => {
        expect(getByText(user.name)).toBeTruthy();
      });
      expect(getByTestId('flatlist')).toBeTruthy();
    });
  });
});
