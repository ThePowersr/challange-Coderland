import { fireEvent, render } from "@testing-library/react-native"
import HomeScreen from "../../src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';

describe('HomeScreen Test', () => {

  const navigation: any = {
    navigate: jest.fn(),
  };

  const renderHomeScreen = () => {
    return render(
      <NavigationContainer>
        <HomeScreen navigation={navigation} />
      </NavigationContainer>
    )
  }

  it('renders correctly button', () => {
    const { getByText } = renderHomeScreen();

    expect(getByText('Tasks')).toBeTruthy();
    expect(getByText('List')).toBeTruthy();

  });

  it('press button Tasks', () => {
    const { getByText } = renderHomeScreen();

    fireEvent.press(getByText('Tasks'))
  });

  it('press button List', () => {
    const { getByText } = renderHomeScreen();

    fireEvent.press(getByText('List'))
  });
})