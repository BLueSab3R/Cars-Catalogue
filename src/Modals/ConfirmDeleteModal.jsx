import React from 'react'
import { deleteItem } from '../utils';
import style from './deleteModa.module.scss';

const ConfirmDeleteModal = ({itemId, setIsDelete }) => {
    const handleConfrimDelete = (e) => {
        e.preventDefault();
        console.log(itemId);
        deleteItem('cars', itemId)
        setIsDelete(false);
    };

    return (
        <div className={style.modal__overlay}>
            <div className={style.modal}>
                <div className={style.modal__confirm}>
                    <form onSubmit={handleConfrimDelete}>
                        <h4>Are you sure?</h4>
                        <div className={style.actionButtons}>
                            <button onClick={()=>setIsDelete(false)}>Close</button>
                            <button onClick={handleConfrimDelete}>Confirm delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal
