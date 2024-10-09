import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE = 'add-value'; 

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
      case ADD_VALUE:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
    default:
      throw new Error('unexpected action type:' + action.type);
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT, });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT, });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ 
      type: CHANGE_VALUE,
      payload: value,
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage;