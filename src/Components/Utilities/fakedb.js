// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getappliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('appliedJob', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJob = getappliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('appliedJob', JSON.stringify(appliedJob));
    }
}

const getappliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('appliedJob');
    if (storedCart) {
        appliedJob = JSON.parse(storedCart);
    }
    return appliedJob;
}

const deleteappliedJob = () => {
    localStorage.removeItem('appliedJob');
}

export {
    addToDb,
    removeFromDb,
    getappliedJob,
    deleteappliedJob
}
