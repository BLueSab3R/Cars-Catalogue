import React from 'react'
import Structure from '../Structure/Structure';
import '../App.scss'
import Search from '../Search/Search';
import AddElement from '../Modals/AddElement';
import { getItems } from '../utils';
const Table = () => {
    const [cars, setCars] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [isAvailable, setIsAvailable] = React.useState('All');
    const [isAddCar, setIsAddCar] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            await fetchItem();
        })();
    }, []);
    const fetchItem = async () => {
        try {
            const localCars = JSON.parse(localStorage.getItem('cars')) || [];
            if (localCars.length === 0) {
                const response = await fetch('https://myfakeapi.com/api/cars/');
                if (response.ok) {
                    const data = await response.json();
                    setCars(data.cars);
                    localStorage.setItem('cars', JSON.stringify(data.cars));
                }
            } else {
                setCars(localCars);
            }
        } catch (error) {
            console.log('Error fetching items: ' + error);
        }
    };

    return (
        <div className='container'>
            <div className="container__top">
                <Search setIsAvailable={setIsAvailable} searchValue={searchValue} setSearchValue={setSearchValue} />
                <button onClick={() => setIsAddCar(!isAddCar)}>ADD CAR</button>
                {isAddCar &&
                    <AddElement setCars={setCars} cars={cars} setIsAddCar={setIsAddCar} />
                }
       
            </div>
            <Structure isAvailable={isAvailable} searchValue={searchValue} cars={cars} setCars={setCars} />
        </div>
    )
}

export default Table
