// import { useReducer } from 'react';
import { useState } from 'react';
import { useImmerReducer } from 'use-immer';
// import { dataReducer } from './reducer';

// useImmerReducer
// 1. 不用自己定义一个新的对象 newState
// 2. 很多immutable的方法都可以直接使用 相关问题可以避免

function dataReducer(draft, action) {
  // const newState = { ...state };

  switch (action.type) {
    case 'changeInput':
      draft.inputValue = action.payload;
      return draft;
    case 'addItem':
      draft.list = [...draft.list, action.payload];
      draft.inputValue = '';
      return draft;
    case 'deleteItem':
      draft.list = draft.list.filter((item, index) => {
        return index !== action.payload;
      });
      return draft;
    default:
      return draft;
  }
}
function ReducerTest() {
  const [inputValue, setInputValue] = useState('');
  const [data, dispatchDate] = useImmerReducer(dataReducer, {
    inputValue: '',
    list: [1, 2, 3],
  });
  const handleListItemClick = (index) => {
    const action = {
      type: 'deleteItem',
      payload: index,
    };
    dispatchDate(action);
  };
  const handleAddToList = () => {
    const action = {
      type: 'addItem',
      payload: inputValue,
    };
    dispatchDate(action);
    setInputValue('');
  };
  const handleInputChange = (e) => {
    const action = {
      type: 'changeInput',
      payload: e.target.bvalue,
    };
    dispatchDate(action);
    setInputValue(e.target.value);
  };
  return (
    <>
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        type='text'
        value={inputValue}
      />
      <button
        onClick={() => {
          handleAddToList();
        }}>
        Click to Add
      </button>
      <ul>
        {data.list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleListItemClick(index);
              }}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ReducerTest;
