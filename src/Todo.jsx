import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState("");
  const [bg, setBg] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addInput() {
    if (editIndex !== null) {
      // Update item
      const newList = [...list];
      newList[editIndex] = input;
      setList(newList);
      setInput("");
      setEditIndex(null);
    } else {
      // Add new item
      if (input.trim() !== "") {
        setList([...list, input]);
        setInput("");
      }
    }
  }

  function handleDelete(index) {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  }

  function handleEdit(index) {
    setInput(list[index]);
    setEditIndex(index);
  }

  function setColor(color) {
    setBg(color);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen content-center  text-white' style={{ backgroundColor: bg === "" ? "black" : bg }}>
        <div className="bg-white mb-5 flex justify-between">
          <div className="text-black flex justify-center items-center p-14 m-1 bg-red-500 w-20 h-20" onClick={() => setColor("red")}>red</div>
          <div className="text-black flex justify-center items-center p-14 m-1 bg-blue-500 w-20 h-20" onClick={() => setColor("blue")}>blue</div>
          <div className="text-black flex justify-center items-center p-14 m-1 bg-green-500 w-20 h-20" onClick={() => setColor("green")}>green</div>
          <div className="text-black flex justify-center items-center p-14 m-1 bg-purple-500 w-20 h-20" onClick={() => setColor("purple")}>purple</div>
        </div>

        <div className="flex justify-center items-center max-w-md mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ color: 'black' }}
            className="py-3 px-5 block w-96 border-gray-200 rounded-l-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Input text"
          />
          <button
            className="py-3 px-5 bg-blue-500 hover:bg-cyan-800 text-white rounded-r-full text-sm focus:outline-none"
            onClick={addInput}
            disabled={input.trim() === ""}
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>

        <ul>
          {list.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-300">
              <span>{item}</span>
              <div>
                <button
                  className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
