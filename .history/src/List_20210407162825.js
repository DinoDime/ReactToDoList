function List(props) {
    return <div>
        {props.itemList.map(itemObj => {
            <p>{itemObj.item</p>
        } 
        )}
    </div>
}

export default List;