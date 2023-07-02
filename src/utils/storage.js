export const getItems = (title) => {
    return JSON.parse(localStorage.getItem(title) || []);
}

export const addItem = (title, data) => {
    const currItem = getItems(title) || [];
    currItem.push(data);
    localStorage.setItem(title, JSON.stringify(currItem));
}


export const deleteItem = (title, id) => {
    const currItem = getItems(title) || []
    const deletedItem = currItem.filter(item => item.id !== id);
    console.log(id);
    localStorage.setItem(title, JSON.stringify(deletedItem));
}