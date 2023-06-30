import React from 'react'
import Pagination from './Pagination/Pagination';
import './structure.scss'
const Structure = ({ cars, searchValue}) => {
    const itemsPerPage = 10;
    const [itemId, setItemId] = React.useState(0);
    const [isDelete, setIsDelete] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(0);

    const handleOpenActions = (e) => {
        const actionButton = e.target;
        const actionDropdown = actionButton.parentNode.querySelector('.action__popup');
        actionDropdown.classList.toggle('active');
    }
    const filteredCars = cars.filter((obj) => {
        if (
            obj.car.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.car_model.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.car_color.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.price.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.car_model_year.toString().includes(searchValue) ||
            obj.car_vin.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.car_vin.toString().includes(searchValue) ||
            obj.price.includes(searchValue)
        ) {
            return true;
        }
        return false;
    }).reverse();
    const pageCount = Math.ceil(filteredCars.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredCars.slice(offset, offset + itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="table-row table-header">
                        <th className="table-cell">Company</th>
                        <th className="table-cell">Car Model</th>
                        <th className="table-cell">Car Color</th>
                        <th className="table-cell">Car Model Year</th>
                        <th className="table-cell bigCell">Car VIN</th>
                        <th className="table-cell">Price</th>
                        <th className="table-cell">Availability</th>
                        <th className="table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((car) => (
                        <tr key={car.id} className="table-row">
                            <td className="table-cell">{car.car}</td>
                            <td className="table-cell">{car.car_model}</td>
                            <td className="table-cell">{car.car_color}</td>
                            <td className="table-cell">{car.car_model_year}</td>
                            <td className="table-cell">{car.car_vin}</td>
                            <td className="table-cell">{car.price}</td>
                            <td className="table-cell">{car.availability ? 'Yes' : 'No'}</td>
                            <td className="table-cell actions">
                                <span onClick={handleOpenActions} className="action">...</span>
                                <div className="action__popup">
                                    <ul>
                                        <li >edit </li>
                                        <li>delete</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <Pagination
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                />
            </div>
        </div>
    )
}

export default Structure
