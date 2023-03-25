const { loadCommands } = require('../../loader/commandHandler');

module.exports = {
    name: 'ready',
    usage: 'ready',
    once: true,
    execute(client) {
        try {
            loadCommands(client)
            console.info(`\x1b[33m${client.user.username}\x1b[34m, logged in\x1b[0m`)
            client.logger.info(`${client.user.username}, logged in`)
        } catch (error) {
            client.logger.error("Error while ready\n" + error)
        }
    },
};