let city = [ 'Mumbai', 'Pune', 'Delhi', 'Banglore' ];

console.log(city);

city[city.length]="Kolkata";

console.log(city) // [ 'Mumbai', 'Pune', 'Delhi', 'Banglore', 'Kolkata' ]

console.log(city.length); // 5

console.log(city[6]) // undefined