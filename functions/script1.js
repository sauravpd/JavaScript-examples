
// function statement\function declaration

/**
 *  calculate age
 * @param {*} year 
 */
function calculateage(year) {
	return new Date().getFullYear()-year;
}

console.log(calculateage(1995));