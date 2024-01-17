import { useState } from 'react';

function AddItem() {
  const [input, useInput] = useState('');
  const handleInputChange = (value) => {};
  const handleAddItem = () => {};
  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}></input>
      <button
        onClick={() => {
          handleAddItem();
        }}></button>
    </>
  );
}

export default AddItem;
