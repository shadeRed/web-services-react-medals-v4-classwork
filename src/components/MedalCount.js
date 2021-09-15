import './../css/MedalCount.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

let MedalCount = ({ color, count, increment, decrement }) => {
    return (
        <div className="medal-count-outer">
            <RemoveCircleIcon onClick={decrement} />
            <div className="medal-count-inner" style={{ backgroundColor: color }}><p>{count}</p></div>
            <AddCircleIcon onClick={increment} />
        </div>
    )
}

export default MedalCount;