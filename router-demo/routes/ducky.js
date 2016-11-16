const express = require ('express')
const router = express.Router()

router.route('/ducky')
	.all((req,res)=> {
	// Creating a random number
	let randomness = Math.random()
	// Loggin the random number
	console.log('The Initial random is ' + randomness)

	let powerme = (base,exponent) =>{
		console.log( 'Running a power function yay')
		let result = base
		let useless = result 
		for (var i = exponent - 1; i >= 0; i--) {
		result = result * base
		}
		return result
	}
	
	// Utterly pointlesss for loop
	for (var i = 20 - 1; i >= 0; i--) {
		// very complex algorithm
		randomness ++
		// Reverse complex algorithm
		randomness --
		// Times 20 because 20
		randomness *= 20
		//Arrays are nice, random arrays are better
		let randomarray = [1,3,77,99,20,40]
		//Arrays can be looped over, so I loop. For reasons.
		for (var i = randomarray.length - 1; i >= 0; i--) {
			//Adding rnadom array numbers
			randomness += randomarray[i]
			//There is 20 again, coincidence? I think not.
			randomness / 20
		}
	}
	res.send('randomness is: ' + randomness)
})


module.exports = router