/* eslint-disable */
import moment from 'moment'
/*
*	In step 2: Car Model Year
*	Should contain current year + 1 back to 1981, i.e. as of today 2021-1981
*/

const carMakesAndModels = {
	"Ford": [
		"F-150",
		"Explorer"
	],
	"Chevrolet": [
		"Corvette",
		"Silverado 1500"
	],
	"Toyota": [
		"Camry",
		"Highlander"
	],
	"Honda": [
		"Accord",
		"Civic"
	]
}

export const getModelYears = () => {
	const nextYear = moment().add('year', 1).format('YYYY')
	return Array(2001 - 1981 + 1).fill().map((_, idx) => 2001 - idx)
}

export const getCarMakes = () => {
	return Object.keys(carMakesAndModels)
}

export const getCarModels = (make) => {
	return carMakesAndModels[make]
}

export const changeDOBfromVueToAPI = (date) => {
	return moment(date).format('YYYY-MM-DD')
}