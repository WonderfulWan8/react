import { useReducer } from 'react';
import { useState } from 'react';
// import { dataReducer } from './reducer';


// recuder 优点
// 1. 业务逻辑代码和渲染代码分离 便于维护
// 2. 代码可读性更高
// 3. 前端自动化测试方便 Jest

// reducer 缺点
// 1. 代码量增加 
// 2. 逻辑复杂度增加
// 3. 逻辑耦合 代码复用性低


function dataReducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'changeInput':
      newState.inputValue = action.payload;
      return newState;
    case 'addItem':
      newState.list = [...newState.list, action.payload];
      newState.inputValue = '';
      return newState;
    case 'deleteItem':
      newState.list = newState.list.filter((item, index) => {
        return index !== action.payload;
      });
      return newState;
    default:
      return state;
  }
}
function ReducerTest() {
  const [inputValue, setInputValue] = useState('');
  const [data, dispatchDate] = useReducer(dataReducer, {
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
