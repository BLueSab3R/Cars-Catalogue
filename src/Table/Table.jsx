import React, { useState } from 'react'
import Structure from '../Structure/Structure';
import '../App.scss'
import Search from '../Search/Search';
import AddElement from '../Modals/AddElement';
import { getItems, setItems } from '../utils';
import { ENDPOINTS } from '../constants';
import { Loader } from '../Loader/Loader';

const Table = () => {
    const [cars, setCars] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isAvailable, setIsAvailable] = useState('All');
    const [isAddCar, setIsAddCar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        (async () => {
            await fetchCars();
            loadLocalCars();
        })().finally(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        });
    }, []);

    const fetchCars = async () => {
        try {
            const localCars = getItems('cars');
            if (localCars.length === 0) {
                const response = await fetch(ENDPOINTS.CARS);
                if (response.ok) {
                    const data = await response.json();
                    setItems('cars', data.cars);
                }
            }
        } catch (error) {
            console.log('Error fetching items: ' + error);
        }
    };

    const loadLocalCars = () => {
        const localCars = getItems('cars');
        setCars(localCars);
    }

    return (
        <div className='container'>
            <div className="container__top">
                <Search setIsAvailable={setIsAvailable} searchValue={searchValue} setSearchValue={setSearchValue} />
                <button onClick={() => setIsAddCar(!isAddCar)}>ADD CAR</button>
                {isAddCar &&
                    <AddElement setCars={setCars} cars={cars} setIsAddCar={setIsAddCar} updateCars={loadLocalCars} />
                }

            </div>
            {!isLoading ? (
                <Structure isAvailable={isAvailable} searchValue={searchValue} cars={cars} setCars={setCars} updateCars={loadLocalCars} />
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default Table
