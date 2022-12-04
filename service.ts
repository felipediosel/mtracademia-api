const { Service } = require('node-windows');

const service = new Service({
    name: 'mtracademia-api',
    description: 'MTR Academia - API',
    script: require('path').join(__dirname, 'index.js')
});

service.on('install', () => {
    service.start();
});

service.install();