module.exports = {
    webpack(config) {
        // This allows for absolute routing;
        config.resolve.modules.push(__dirname)
        return config;
    },
}