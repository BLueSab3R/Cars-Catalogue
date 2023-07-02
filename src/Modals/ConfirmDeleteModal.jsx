import React from 'react'
import { deleteItem } from '../utils';
import style from './deleteModa.module.scss';

const ConfirmDeleteModal = ({ itemId, setIsDelete, updateCars }) => {
    const handleConfrimDelete = (e) => {
        e.preventDefault();
        deleteItem('cars', itemId);
        updateCars();
        setIsDelete(false);
    };

    const handleClose = () => setIsDelete(false);

    return (
        <>
            <div className={style.modal__wrapper}>
                <div className={style.modal}>
                    <div className={style.modal__confirm}>
                        <form onSubmit={handleConfrimDelete}>
                            <h4>Are you sure?</h4>
                            <div className={style.actionButtons}>
                                <button onClick={handleClose}>Close</button>
                                <button onClick={handleConfrimDelete}>Confirm delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.modal__overlay} onClick={handleClose} />
        </>
    );
}

export default ConfirmDeleteModal
