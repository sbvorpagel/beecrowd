const helloWorld = require('./1000');

test('should return "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
});