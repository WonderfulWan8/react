import { useState } from 'react';
// import { useImmer } from 'use-immer';
import { useReducer } from 'react';

// reducer
// 1.定义数据
// 2.定义Action 发送改变数据的指令
// 3. 拿到Action之后 dispatch 方法 派发 Action
// 4.根据指令修改数据
// 5.完成数据修改 重新渲染页面

// (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return [...state, action.payload];
//     case 'delete':
//       return state.filter((item, index) => index !== action.payload);
//     default:
//       return state;
//   }
// },

function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((item, index) => {
        return index !== action.payload;
      });
    default:
      return state;
  }
}

function AddToList() {
  // const [list, setList] = useImmer([1, 2, 3]);
  const result = useState([1, 2, 3]);
  const list = result[0];
  const setList = result[1];

  const [inputValue, setInputValue] = useState('');

  let a = '123';
  a = '456';
  setInputValue('456')

  const [newList, dispatchList] = useReducer(listReducer, [1, 2, 3]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // const handleAddToList = () => {
  //   setList((draft) => {
  //     draft.push(inputValue);
  //   });
  //   setInputValue('');
  // };
  const newHandleAddToList = () => {
    const action = {
      type: 'add',
      payload: inputValue,
    };
    dispatchList(action);
    setInputValue('');
  };
  // const handleItemClick = (index) => {
  //   setList((draft) => {
  //     draft.splice(index, 1);
  //   });
  // };
  const handleNewItemClick = (index) => {
    const action = {
      type: 'delete',
      payload: index,
    };
    dispatchList(action);
  };
  return (
    <>
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        type='text'
        value={inputValue} // 添加 value 属性，将输入框的值绑定到 inputValue
      />
      {/* <button
        onClick={() => {
          handleAddToList();
        }}>
        {' '}
        Add to list
      </button> */}
      <button
        onClick={() => {
          newHandleAddToList();
        }}>
        {' '}
        Add to newList
      </button>

      <ul>
        {/* {list.map((item, index) => {
          return (
            <li
              onClick={() => {
                handleItemClick(index);
              }}
              key={item}>
              {item}
            </li>
          );
        })} */}
        {newList.map((item, index) => {
          return (
            <li
              onClick={() => {
                handleNewItemClick(index);
              }}
              key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default AddToList;
