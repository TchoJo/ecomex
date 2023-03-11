const utils = require('../utils/utils');


const getUsers = async () => {
    let resp = await utils.getItems("https://jsonplaceholder.typicode.com/users");
    return resp.data;
};

module.exports = { getUsers };

