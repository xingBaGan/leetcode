import hello from '../src/HelloWorld';

test('hello world test', () => {
    expect(hello('message')).toBe(true);
});