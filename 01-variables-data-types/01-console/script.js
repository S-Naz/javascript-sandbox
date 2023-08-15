console.log('Hello, World!');

console.log(100);

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

console.error('This is error');

console.warn('Warning');

console.table({name: 'Brad', email: 'Brad@gmail.com'});

console.group('Simple Group');
console.log('Hello, World!');
console.log(100);
console.log(20, 'Hello', true);
console.groupEnd();

// 🚀 CONSOLE CUSTOM STYLES
const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%cHello, World', styles);