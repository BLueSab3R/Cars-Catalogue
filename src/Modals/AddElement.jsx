import React from 'react';
import { addItem } from '../utils';
import style from './modal.module.scss';
const AddElement = ({ setIsAddCar, cars, updateCars }) => {
    const [newData, setNewData] = React.useState({
        car: '',
        model: '',
        VIN: '',
        color: '',
        year: '',
        price: '',
        availability: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            car: newData.car,
            car_model: newData.model,
            car_color: newData.color,
            car_model_year: newData.year,
            car_vin: newData.VIN,
            price: '$' + newData.price,
            availability: newData.availability,
            id: cars[cars.length - 1].id + 1,
        };
        addItem('cars', newCar);
        updateCars();
        setIsAddCar(false);
    };
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        let val = value;
        if (name === 'availability') {
            val = checked;
        }
        setNewData((prevData) => ({ ...prevData, [name]: val }))
    }

    const handleClose = () => setIsAddCar(false);

    return (
        <>
            <div className={style.modal__wrapper}>
                <div className={style.modal}>
                    <div className={style.close}>
                        <button onClick={handleClose}>BACK</button>
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
                                    type="number"
                                    min="1900"
                                    max="2023"
                                    step="1"
                                    placeholder="Year"
                                />
                            </li>
                            <li>
                                <h1>Price in USD:</h1>
                                <input
                                    name="price"
                                    onChange={handleChange}
                                    type="number"
                                    step="0.01"
                                    placeholder="Price"
                                />
                            </li>
                            <li>
                                <h1>Is available</h1>
                                <input
                                    onChange={handleChange}
                                    type='checkbox'
                                    name="availability"
                                    checked={newData.availability}
                                ></input>
                            </li>
                            <li>
                                <button type="submit">SUBMIT</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className={style.modal__overlay} onClick={handleClose} />
        </>
    );
};

export default AddElement;