import "./index.css";

function List(props) {
  //define key
  const deleteItemFromList = (key) => {
    const newList = props.itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
		//print newList
    props.updateItemList(newList);
  };
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
}

export default List;
