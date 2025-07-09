export function showDate() {
	console.log(mmnt(new Date()).format('DD-MM-YYYY'));
}

export function dummyFunc() {
	console.log('Just a dummy function to demonstrate tree shaking.');
}
