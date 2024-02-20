//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const mountainPeaks: string[] = ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu'];

// Intentionally accessing an index that is out of bounds to trigger an index error
console.log(mountainPeaks[10]);

// This line of code will introduce an index error by trying to access an element at index 10
// It is important to handle such errors to prevent program crashes

