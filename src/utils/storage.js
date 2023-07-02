import {updateObjectById} from './common';

export const getItems = (title) => {
    return JSON.parse(localStorage.getItem(title)) || [];
}

export const setItems = (title, data) => {
    localStorage.setItem('cars', JSON.stringify(data));
}

export const addItem = (title, data) => {
    const currItem = getItems(title) || [];
    currItem.push(data);
    localStorage.setItem(title, JSON.stringify(currItem));
}

export const deleteItem = (title, id) => {
    const currItem = getItems(title) || []
    const deletedItem = currItem.filter(item => item.id !== id);
    localStorage.setItem(title, JSON.stringify(deletedItem));
}

export const updateItemById = (title, id, data) => {
    const currItem = getItems(title) || [];
    if (currItem.find(item => item.id === id)) {
        const newItem = updateObjectById(currItem, id, data);
        localStorage.setItem(title, JSON.stringify(newItem));
    }
}