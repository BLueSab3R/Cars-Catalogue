import React from 'react'
import ConfirmDeleteModal from '../Modals/ConfirmDeleteModal';
import Pagination from './Pagination/Pagination';
import './structure.scss'
import EditCarData from '../Modals/EditCarData';
const Structure = ({ cars, searchValue, isAvailable, updateCars }) => {
    const itemsPerPage = 10;
    const [itemId, setItemId] = React.useState(0);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isDelete, setIsDelete] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(0);

    const handleEdit = (id) => {
        setIsEdit(!isEdit);
        setItemId(id);
    }

    const handleDelete = (id) => {
        setIsDelete(!isDelete);
        setItemId(id);
    }

    const filteredCars = cars.filter((obj) => {
        const searchWord = searchValue.toLowerCase().split(' ');
        return searchWord.some((word) => {
            return (
                obj.car.toLowerCase().includes(word.toLowerCase()) ||
                obj.car_model.toLowerCase().includes(word.toLowerCase()) ||
                obj.car_color.toLowerCase().includes(word.toLowerCase()) ||
                obj.price.toLowerCase().includes(word.toLowerCase()) ||
                obj.car_model_year.toString().includes(word.toLowerCase()) ||
                obj.car_vin.toString().toLowerCase().includes(word.toLowerCase()) ||
                obj.car_vin.toString().includes(word.toLowerCase()) ||
                obj.price.includes(word.toLowerCase())
            )
        })
    }).filter((obj) => {
        if (isAvailable === 'All') {
            return true;
        }
        else if (isAvailable === 'Available') {
            return obj.availability === true;
        }
    }).reverse();
    const pageCount = Math.ceil(filteredCars.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredCars.slice(offset, offset + itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const handleOpenActions = (e) => {
        const actionButton = e.target;
        const actionDropdown = actionButton.parentNode.querySelector('.action__popup');
        actionDropdown.classList.toggle('active');

        const clickCatcher = document.querySelector('.bgClickCatcher');
        clickCatcher.classList.toggle('active');
        const handleCloseDropdown = () => {
            actionDropdown.classList.toggle('active');
            clickCatcher.classList.toggle('active');
            clickCatcher.removeEventListener('click', handleCloseDropdown);
        }
        clickCatcher.addEventListener('click', handleCloseDropdown);
    }

    return (
        <div>
            {filteredCars.length > 0 ?
                <table className="table">
                    <thead>
                        <tr className="table-row table-header">
                            <th className="table-cell">Company</th>
                            <th className="table-cell">Model</th>
                            <th className="table-cell bigCell">VIN</th>
                            <th className="table-cell">Color</th>
                            <th className="table-cell">Year</th>
                            <th className="table-cell">Price</th>
                            <th className="table-cell">Is Available</th>
                            <th className="table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((car) => (
                            <tr key={car.id} className="table-row">
                                <td className="table-cell">{car.car}</td>
                                <td className="table-cell">{car.car_model}</td>
                                <td className="table-cell">{car.car_vin}</td>
                                <td className="table-cell">{car.car_color}</td>
                                <td className="table-cell">{car.car_model_year}</td>
                                <td className="table-cell">{car.price}</td>
                                <td className="table-cell">{car.availability ? 'Yes' : 'No'}</td>
                                <td className="table-cell actions">
                                    <div className="actions__wrapper">
                                        <span onClick={handleOpenActions} className="action__button">...</span>
                                        <div className="action__popup">
                                            <ul>
                                                <li onClick={() => handleEdit(car.id)}>Edit </li>
                                                <li onClick={() => handleDelete(car.id)}>Delete</li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : (
                    <div className="noFound">
                        <h1>Sorry, but there's nothing😔</h1>
                    </div>
                )
            }

            <div className="pagination">
                <Pagination
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                />
            </div>
            {isDelete &&
                <ConfirmDeleteModal itemId={itemId} setIsDelete={setIsDelete} updateCars={updateCars} />}
            {isEdit &&
                <EditCarData cars={cars} itemId={itemId} setIsEdit={setIsEdit} updateCars={updateCars} />}
        </div>
    )
}

export default Structure
