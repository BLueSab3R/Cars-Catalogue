import React from 'react'
import style from './modal.module.scss';
import { updateItemById, updateObjectById } from '../utils';

const EditCarData = ({ cars, itemId, setIsEdit, updateCars }) => {
    const [newData, setNewData] = React.useState({
        car: '',
        car_model: '',
        car_vin: '',
        car_color: '',
        car_model_year: '',
        price: '',
        availability: '',
    });
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        let val = value;
        if (name === 'availability') {
            val = checked;
        }
        setNewData((prevData) => ({ ...prevData, [name]: val }));
    };
    React.useEffect(() => {
        const selectedCar = cars.find((car) => car.id === itemId);

        if (selectedCar) {
            setNewData({
                car: selectedCar.car,
                car_model: selectedCar.car_model,
                car_vin: selectedCar.car_vin,
                car_color: selectedCar.car_color,
                car_model_year: selectedCar.car_model_year,
                price: selectedCar.price[0] !== '$' ? '$' + selectedCar.price : selectedCar.price,
                availability: selectedCar.availability,
                id: selectedCar.id,
            });
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        updateItemById('cars', itemId, newData);
        updateCars();
    };

    const handleClose = () => setIsEdit(false);

    return (
        <>
            <div className={style.modal__wrapper}>
                <div className={style.modal}>
                    <div className={style.close}>
                        <button onClick={handleClose}>BACK</button>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <ul >
                            <li className={style.item_disabled}>
                                <h1>Company:</h1>
                                <input
                                    disabled
                                    name="car"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Company"
                                    value={newData.car}
                                />
                            </li>
                            <li className={style.item_disabled}>
                                <h1>Model:</h1>
                                <input
                                    disabled
                                    name="car_model"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Model"
                                    value={newData.car_model}
                                />
                            </li>
                            <li className={style.item_disabled}>
                                <h1>VIN:</h1>

                                <input
                                    disabled
                                    name="car_vin"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="VIN"
                                    value={newData.car_vin}
                                />
                            </li>
                            <li>
                                <h1>Color:</h1>

                                <input
                                    name="car_color"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Color"
                                    value={newData.car_color}
                                />
                            </li>
                            <li className={style.item_disabled}>
                                <h1>Year:</h1>

                                <input
                                    disabled
                                    name="year"
                                    onChange={handleChange}
                                    type="number"
                                    min="1900"
                                    max="2023"
                                    step="1"
                                    placeholder="Year"
                                    value={newData.car_model_year}
                                />
                            </li>
                            <li>
                                <h1>Price:</h1>
                                <input
                                    name="price"
                                    onChange={handleChange}
                                    type="number"
                                    step="0.01"
                                    placeholder="Price"
                                    value={newData.price.split('$')[1]}
                                />
                            </li>
                            <li>
                                <h1>Availability:</h1>
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
    )
}

export default EditCarData;