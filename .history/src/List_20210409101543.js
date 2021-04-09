import "./index.css";
import App from "./App";

function returnDeletedList(props){
  return (
    <div>
      {props.itemList.map((itemObj) => {
        return (
          <div key={itemObj.key} className="Item">
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default returnDeletedList;
