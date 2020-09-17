function first(second) {
    console.log('first');
    second();
}
function second() {
    console.log('second');
}

first(second);