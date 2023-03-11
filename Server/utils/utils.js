const axios = require('axios');

const getItems = (urLink) => {
    return axios.get(urLink);
};

const getItem = (urLink, id) => {
    return axios.get(`${urLink}/${id}`);
};

const updateItem = (urLink, id, itemEdit) => {
    return axios.put(`${urLink}/${id}`, itemEdit);
};

const postItem = (urLink, newItem) => {
    return axios.push(urLink, newItem);
};

const deleteItem = (urLink, id) => {
    return axios.delete(`${urLink}/${id}`);
};

module.exports = { getItems, getItem, updateItem, postItem, deleteItem };