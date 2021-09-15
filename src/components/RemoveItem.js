import './../css/RemoveItem.css';

let RemoveItem = ({ fn }) => {
    return (
        <span className="remove-container">
            <button onClick={fn} className="remove-btn">Remove</button>
        </span>
    )
}

export default RemoveItem;