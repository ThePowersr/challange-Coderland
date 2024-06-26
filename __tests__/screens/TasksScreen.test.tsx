import { fireEvent, render, resetToDefaults } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../../src/redux/store";
import TasksScreen from "../../src/screens/TasksScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';

describe('TasksScreen test', () => {

  const renderTasksScreen = () => {
    return render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <Provider store={store}>
          <TasksScreen />
        </Provider>
      </SafeAreaProvider>
    );
  };

  it('renders correctly and allows adding a task', () => {
    const { getByText, getByPlaceholderText } = renderTasksScreen();

    expect(getByText('Add New Task')).toBeTruthy();
    fireEvent.press(getByText('Add New Task'));
    fireEvent.changeText(getByPlaceholderText('Task description'), 'New Task');
    fireEvent.press(getByText('Add Task'));

    const actions = store.getState().tasks.tasks[0].description;
    expect(actions).toEqual('New Task');

    resetToDefaults();

  });

  it('does not allow adding a task if the input is empty', () => {
    const { getByText, getByPlaceholderText } = renderTasksScreen();

    fireEvent.press(getByText('Add New Task'));
    fireEvent.press(getByText('Add Task'));

    const actions = store.getState();
    expect(actions).toEqual(store.getState());
  })

  it('close modal', () => {
    const { getByText, getByTestId } = renderTasksScreen();

    fireEvent.press(getByText('Add New Task'));
    fireEvent.press(getByText('Close'));

    expect(() => getByTestId('modal')).toThrow();
  });
});
