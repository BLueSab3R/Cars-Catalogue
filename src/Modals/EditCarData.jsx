import React from 'react'
import { updateItemById, updateObjectById } from '../../utils';
import style from './modal.module.scss';

const EditCarData = ({ cars, itemId, setIsEdit }) => {
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
        const { name, value } = e.target;
        console.log(name, value)
        setNewData((prevData) => ({ ...prevData, [name]: value }));
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
                price: selectedCar.price,
                availability: selectedCar.availability,
                id: cars.id,
            });
            }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        updateObjectById(cars, itemId, newData);
        updateItemById('cars', itemId, newData);
    };
    return (
        <div className={style.modal__overlay}>
            <div className={style.modal}>
                <div className={style.close}>
                    <button onClick={() => setIsEdit(false)}>BACK</button>
                </div>

                <form onSubmit={handleSubmit} >
                    <ul >
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
                            <h1>Year:</h1>

                            <input
                                disabled
                                name="car_color"
                                onChange={handleChange}
                                type="text"
                                placeholder="Year"
                                value={newData.car_model_year}
                            />
                        </li>
                        <li>
                            <h1>Price:</h1>
                            <input
                                name="price"
                                onChange={handleChange}
                                type="text"
                                placeholder="Price"
                                value={newData.price}
                            />
                        </li>
                        <li>
                            <h1>Availability:</h1>
                            <select
                                className={style.select}
                                name="availability"
                                onChange={handleChange}
                                value={newData.availability}
                            >
                                {newData.availability === false ?
                                    <>
                                        <option value='0'>No</option>
                                        <option value='1'>Yes</option>
                                    </>
                                    :
                                    <>
                                        <option value='1'>Yes</option>
                                        <option value='0'>No</option>
                                    </>}

                            </select>
                        </li>
                        <li>
                            <button type="submit">SUBMIT</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default EditCarData;