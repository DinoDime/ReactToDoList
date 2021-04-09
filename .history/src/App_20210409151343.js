import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import List from "./List";

function App() {
  const[currentItem, setCurrentItem] = useState(null);
  const[itemList, updateItemList] = useState([]);
  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList = () =>{
    updateItemList([...itemList, {item: currentItem, key: Date()}]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input placeholder="Add item" 
            value={currentItem} 
            onChange={onChangeHandler}>
            </input>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

function deleteList(props) {
  //define key
  const deleteItemFromList = (key) => {
		//print here 
    const newList = props.itemList.filter((itemObj) => {
			//print here
      return itemObj.key !== key;
    });
		//print newList
    props.updateItemList(newList);
  };
};

export default App;