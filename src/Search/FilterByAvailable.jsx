import React from 'react'
import styles from './searching.module.scss'

const FilterByAvailable = ({ setIsAvailable }) => {
    const [counter, setCounter] = React.useState(0);
    const handleIsAvailable = (e) => {
        setCounter(counter + 1);
        if (counter % 2 !== 1) {
            setIsAvailable(e.target.value);
        } else {
            setIsAvailable('All')
        }
    }
    return (
        <div className={styles.checkbox}>
            <span>Show only available</span>
            <input
                onClick={handleIsAvailable}
                type='checkbox'
                value='Available'
            ></input>
        </div>
    )
}

export default FilterByAvailable
