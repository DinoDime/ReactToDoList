import "./index.css";

function List(props) {
    const deleteItemFromList = () => {
        const newList = props.itemList.filter(itemObj => {
            return itemObj.key !== key;
        });
        };
    return <div>
        {props.itemList.map(itemObj => {
            return <div className="Item">
                <p>{itemObj.item}</p>
                <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
            </div>
        })}
    </div>
}


export default List;