export function updateObjectById(array, id, newProperties) {
    let updatedProperties = newProperties;
    if (newProperties === 'availability') {
        updatedProperties = Number(newProperties)
    }
    const index = array.findIndex(obj => obj.id === id);
    if (index !== -1) {
        array[index] = { ...array[index], ...updatedProperties };
    }

    return array;
}