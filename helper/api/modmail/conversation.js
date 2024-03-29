const { kahlifarApiAxios } = require('../../../loader/axios');

async function getConversation(conversationId, client) {
    try {
        const response = await kahlifarApiAxios.get(`${process.env.API_URL}/modmail/conversations/${conversationId}`)
        return response.data;
    } catch (error) {
        client.logger.error(error);
        return {
            isError: true,
            error: error?.response?.data?.message ? error.response.data.message : error.message
        }
    }
}

async function createConversation(conversation, client) {
    try {
        const response = await kahlifarApiAxios.post(`${process.env.API_URL}/modmail/conversations`, conversation)
        return response.data;
    } catch (error) {
        client.logger.error(error);
        return {
            isError: true,
            error: error?.response?.data?.message ? error.response.data.message : error.message
        }
    }
}

async function updateConversation(conversationId, conversation, client) {
    try {
        const response = await kahlifarApiAxios.put(`${process.env.API_URL}/modmail/conversations/${conversationId}`, conversation)
        return response.data;
    } catch (error) {
        client.logger.error(error);
        return {
            isError: true,
            error: error?.response?.data?.message ? error.response.data.message : error.message
        }
    }
}

async function deleteConversation(conversationId, client) {
    try {
        const response = await kahlifarApiAxios.delete(`${process.env.API_URL}/modmail/conversations/${conversationId}`)
        return response.data;
    } catch (error) {
        client.logger.error(error);
        return {
            isError: true,
            error: error?.response?.data?.message ? error.response.data.message : error.message
        }
    }
}

module.exports = {
    getConversation,
    createConversation,
    updateConversation,
    deleteConversation
}