import React from 'react'
import styles from './searching.module.scss'

const FilterByAvailable = ({ setIsAvailable }) => {
    const [counter, setCounter] = React.useState(0);
    const handleIsAvailable = (e) => {
        setCounter(counter + 1);
        console.log(counter);
        if (counter %2 !== 1) {
            setIsAvailable(e.target.value);
        }else{
            setIsAvailable('All')
        }
    }
    return (
        <div className={styles.checkbox}>
            <span>Select on availability</span>
            <input
                onClick={handleIsAvailable}
                type='checkbox'
                value='Available'
            ></input>
        </div>
    )
}

export default FilterByAvailable
