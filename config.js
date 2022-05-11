module.exports = {
    server: {
        port: Number(process.env.PORT || 3000),
    },
    env: {
        env: process.env.NODE_ENV,
        is_development: process.env.NODE_ENV === 'development',
        is_production: process.env.NODE_ENV === 'production',
    },
};
