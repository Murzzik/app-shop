module.exports = {
    server: {
        port: Number(process.env.PORT || 3000),
    },
    env: {
        is_development: process.env.NODE_ENV === 'development',
        is_production: process.env.NODE_ENV === 'production',
    },
};
