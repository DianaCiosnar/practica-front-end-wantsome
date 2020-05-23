function minim(array) {
    return new Promise(function (resolve, reject) {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        resolve(min);
    })
}
minim([10, 5, 8, 3]).then(response => {
    console.log("minimul este:", response);
});

