export const getItems = (title) => {
    return JSON.parse(localStorage.getItem(title) || []);
}

export const addItem = (title, data) => {
    const currItem = getItems(title) || [];
    currItem.push(data);
    localStorage.setItem(title, JSON.stringify(currItem));
}
