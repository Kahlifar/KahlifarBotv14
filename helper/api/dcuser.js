const axios = require('axios');
const client = require('../../index.js');

async function getDCUser(discordId) {
    try {
        const user = await axios.get(`${process.env.API_URL}/dcusers/byDiscordId/${discordId}`, {
            headers: {
                API_KEY: process.env.API_KEY
            }
        });
        return user.data;
    } catch (error) {
        return {
            isError: true,
            message: error.response.data.message
        };
    }
}

async function registerDCUser(dcuser) {
    try {
        const newDCUser = await axios.post(`${process.env.API_URL}/dcusers`, dcuser, {
            headers: {
                API_KEY: process.env.API_KEY
            }
        });
        return newDCUser.data;
    } catch (error) {
        return {
            isError: true,
            message: error.response.data.message
        };
    }
}

async function updateDCUser(dcuserId, dcuser) {
    try {
        const updatedDCUser = await axios.put(`${process.env.API_URL}/dcusers/${dcuserId}`, dcuser, {
            headers: {
                API_KEY: process.env.API_KEY
            }
        });
        return updatedDCUser.data;
    } catch (error) {
        return {
            isError: true,
            message: error.response.data.message
        };
    }
}

async function getMainDCUser(discordUsers) {
    for (const user of discordUsers) {
        if (user.isMainUser) {
            return user;
        }
    }
}

module.exports = {
    getDCUser,
    registerDCUser,
    getMainDCUser,
    updateDCUser
}