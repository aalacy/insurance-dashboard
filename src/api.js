/* eslint-disable */
import axios from 'axios'
import api, { genericHeaders, emailSuffix } from './config'
import { changeDOBfromVueToAPI } from './util'


export const callQuote = async (state, payload, url='', method="POST") => {
	state.loading = true
	let res
	try {
	 	res = await axios({
	 		url: `${api}${url}`,
	 		method,
	 		data: payload
	 	})
	} catch(e) {
		state.error = e.response
	} finally {
		state.loading = false
	};

	return res
}

// Quote shell
export const createQuoteShell = async (state, payload={}) => {
	const res = await callQuote(state, payload)
	if (res) {
		state.quote_shell = res.data
	    localStorage.setItem('shell_id', state.quote_shell.id)
	}
}

export const getQuoteShell = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const url = `${shell_id}/`
	const res = callQuote(state, payload, url, 'GET')
	if (res) {
		state.quote = res.data
	}
}

// Quote
export const createQuote = async (state) => {
	const shell_id = localStorage.getItem('shell_id')
	let url = `${shell_id}/quotes/`
	const payload = { quote_shell: shell_id }
	const res = await callQuote(state, payload, url)
	if (res) {
		state.quote = res.data
		localStorage.setItem('quote_id', state.quote.id)
	}
}

export const updateQuote = async (state, payload, url) => {
	const res = await callQuote(state, payload, url, 'PATCH')
	if (res) {
		state.quote = res.data
	}
}

export const getQuote = async (state, payload) => {
	const res = callQuote(state, payload, url, 'GET')
	if (res) {
		state.quote = res.data
	}
}

// Driver
export const createDriver = async (state, payload) => {
	await createQuoteShell(state)

	await createQuote(state)

	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	let url = `${shell_id}/quotes/${quote_id}/drivers/`
	const _payload = Object.assign({}, payload)
	_payload.phone = payload.phone.replace('(', '').replace(')', '').replace('-', '')
	_payload.email = payload.email + emailSuffix
	_payload.dob = changeDOBfromVueToAPI(payload.dob)
	const res = await callQuote(state, { ..._payload, quote: state.quote.id }, url)
	if (res) {
		state.driver = res.data
		localStorage.setItem('driver_id', res.data.id)
	}
}

export const updateDriver = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const driver_id = localStorage.getItem('driver_id')
	const url = `${shell_id}/quotes/${quote_id}/drivers/${driver_id}/`
	const res = await callQuote(state, { ...payload, quote: quote_id }, url, 'PATCH')
	if (res) {
		state.driver = res.data
	}
}

export const getDriver = async (state, payload) => {
	await callQuote(state, payload, url, 'GET')
}

// Vehicle
export const createVehicle = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const url = `${shell_id}/quotes/${quote_id}/vehicles/`
	const res = await callQuote(state, { ...payload, quote: quote_id }, url)
	if (res) {
		state.vehicle = res.data
		localStorage.setItem('vehicle_id', res.data.id)
	}
}

export const updateVehicle = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const vehicle_id = localStorage.getItem('vehicle_id')
	const url = `${shell_id}/quotes/${quote_id}/vehicles/${vehicle_id}/`
	const res = await callQuote(state, { ...payload, quote: quote_id }, url, 'PATCH')
	if (res) {
		state.vehicle = res.data
	}
}

export const getVehicle = async (state) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const vehicle_id = localStorage.getItem('vehicle_id')
	const url = `${shell_id}/quotes/${quote_id}/vehicles/${vehicle_id}/`
	const res = await callQuote(state, {}, url, 'GET')
	if (res) {
		state.vehicle = res.data
	}
}

// Address
export const createAddress = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const url = `${shell_id}/quotes/${quote_id}/addresses/`
	const res = await callQuote(state, { ...payload, quote: quote_id }, url)
	if (res) {
		state.address = res.data
		localStorage.setItem('address_id', res.data.id)
	}
}

export const updateAddress = async (state, payload) => {
	const shell_id = localStorage.getItem('shell_id')
	const quote_id = localStorage.getItem('quote_id')
	const address_id = localStorage.getItem('address_id')
	const url = `${shell_id}/quotes/${quote_id}/addresses/${address_id}/`
	const res = await callQuote(state, { ...payload, quote: quote_id }, url, 'PATCH')
	if (res) {
		state.address = res.data
	}
}


