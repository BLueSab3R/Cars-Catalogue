import React from 'react';
import { addItem } from '../utils';
import style from './modal.module.scss';
const AddElement = ({ setIsAddCar, cars, setCars }) => {
    const [isAvailable, setIsAvailable] = React.useState(false);
    const [newData, setNewData] = React.useState({
        car: '',
        model: '',
        VIN: '',
        color: '',
        year: '',
        price: '',
        availability: isAvailable,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            car: newData.car,
            car_model: newData.model,
            car_color: newData.color,
            car_model_year: newData.year,
            car_vin: newData.VIN,
            price: newData.price,
            availability: newData.availability,
            id: cars[cars.length - 1].id + 1,
        };
        setCars([...cars, newCar]);
        addItem('cars', newCar);
        setIsAddCar(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let val = value;
        if (name === 'availability') {
            val = Number(value);
        }
        setNewData((prevData) => ({ ...prevData, [name]: val }));
    };


    return (
        <div className={style.modal__overlay}>
            <div className={style.modal}>
                <div className={style.close}>
                    <button onClick={() => setIsAddCar(false)}>BACK</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <h1>Company:</h1>
                            <input
                                name="car"
                                onChange={handleChange}
                                type="text"
                                placeholder="Company"
                            />
                        </li>
                        <li>
                            <h1>Model:</h1>
                            <input
                                name="model"
                                onChange={handleChange}
                                type="text"
                                placeholder="Model"
                            />
                        </li>
                        <li>
                            <h1>VIN:</h1>
                            <input
                                name="VIN"
                                onChange={handleChange}
                                type="text"
                                placeholder="VIN"
                            />
                        </li>
                        <li>
                            <h1>Color:</h1>
                            <input
                                name="color"
                                onChange={handleChange}
                                type="text"
                                placeholder="Color"
                            />
                        </li>
                        <li>
                            <h1>Year:</h1>
                            <input
                                name="year"
                                onChange={handleChange}
                                type="text"
                                placeholder="Year"
                            />
                        </li>
                        <li>
                            <h1>Price:</h1>
                            <input
                                name="price"
                                onChange={handleChange}
                                type="text"
                                placeholder="Price"
                            />
                        </li>
                        <li>
                            <span>Select on availability</span>
                            <input
                                onChange={handleChange}
                                type='checkbox'
                                value='1'
                            ></input>
                        </li>
                        <li>
                            <button type="submit">SUBMIT</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default AddElement;