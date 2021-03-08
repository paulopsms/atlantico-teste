const proxy = [
  {
    context: ['/', '/users', '/authenticate'],
    target: 'http://localhost:8000',
  }
];
module.exports = proxy;
