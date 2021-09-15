import './../css/MedalItem.css';
import MedalCount from './MedalCount';
import RemoveItem from './RemoveItem';
import { Badge } from '@material-ui/core';

let colors = [
    '#ffd900',
    '#c5cad9',
    '#d9a36a',
]

let MedalItem = ({ name, count, increment, decrement, remove }) => {
    return (
        <div>
            <p className="medal-header">{name}<Badge badgeContent={count.reduce((a, b) => a + b, 0)} color="primary"/><RemoveItem fn={remove} /></p>
            {
                colors.map((c, i) =>
                    <MedalCount
                        color={c}
                        count={count[i]}
                        key={i}

                        increment={() => increment(i)}
                        decrement={() => decrement(i)}
                    />
                )
            }
        </div>
    )
}

export default MedalItem;