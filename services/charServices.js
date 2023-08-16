const axios = require('axios');
require('dotenv').config();

const charServices = async () => {
    console.log("Rick and Morty Characters");
    return await axios.get(`${process.env.charURL}`);
};

const charServicesById = async (id) => {
    console.log("Character by Id");
    return await axios.get(`${process.env.charURL}${id}`);
}

module.exports = { 
    charServices, 
    charServicesById 
};
