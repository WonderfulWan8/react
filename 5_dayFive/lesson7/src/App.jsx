// import Test1 from "./Test1";
// import ReducerTest from "./Test2";
// import Test3 from './Test3ImmerReducer';
// import { useState } from 'react';
// import Body from './Body/Test5Body';
// import Header from './Header/Test4Header';
// import nameContext from './nameContext';
// import Test8Children from './Test8Children';
import AddItem from "./TodoList/AddItem";
import ItemList from "./TodoList/ItemList";
function Game() {
  // const [user, setUser] = useState('UnKnown');
  // const handleHeaderChange = () => {
  //   setUser('dell');
  // };
  return (
    <>
      {/* <Test1 /> */}
      {/* <ReducerTest /> */}
      {/* <Test3 /> */}
      {/* <nameContext.Provider value={user}>
        <Header
          onChange={() => {
            handleHeaderChange();
          }}
        />
        <nameContext.Provider value={'helloworld'}>
          <Body />
        </nameContext.Provider>
      </nameContext.Provider>
      <Test8Children>
        <div>通过children的方式在组件间传值</div>
      </Test8Children> */}
      <AddItem />
      <ItemList />
    </>
  );
}

export default Game;
