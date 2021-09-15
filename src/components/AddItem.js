import './../css/AddItem.css';

let AddItem = ({ fn }) => {
    let add = () => {
        let country = prompt("enter the name of the country");
        if (country === '') { return alert('invalid country name') }
        fn(country);
    }

    return (
        <span className="add-container">
            <button onClick={add} className="add-btn">Add Country</button>
        </span>
    )
}

export default AddItem;