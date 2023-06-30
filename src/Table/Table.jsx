import React from 'react'
import Structure from '../Structure/Structure';
import '../App.scss'
import Search from '../Search/Search';
const Table = () => {
    const [cars, setCars] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        (async () => {
            await fetchItem();
        })();
    }, []);
    const fetchItem = async () => {
        try {
            const response = await fetch('https://myfakeapi.com/api/cars/');
            if (response.ok) {
                const data = await response.json();
                setCars(data.cars);
            }
        } catch (error) {
            console.log('Error fetching items: ' + error);
        }
    }
    return (
        <div className='container'>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Structure searchValue={searchValue} cars={cars} setCars ={setCars} />
        </div>
    )
}

export default Table
