function arr(n) {

    return new Promise(function(resolve, reject) { //returning the promise 

        n = ["red", "blue", "green", "pink"];
        console.log(n.map(function(x) { //using maps to convert the whole array of strings to upper case
            return x.toUpperCase();

            setTimeout(function() {
                resolve(x.toUpperCase()); // rsolve is used to produce the output of the given array
            }, 3000); // 3000 ms or 3 sec is taken
        }))
    })
};
arr(3).then(function(newData) { // taking n = 3 as the length of the array
    console.log(newData);
});