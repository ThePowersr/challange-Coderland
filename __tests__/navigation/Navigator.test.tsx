import { fireEvent, render } from '@testing-library/react-native';
import AppNavigator from '../../src/navigation/Navigator';

describe('navigator test', () => {
  it('renders correctly button', () => {
    const { getByText, debug } = render(
      <AppNavigator />
    )
    expect(getByText('Tasks'));
  })
})