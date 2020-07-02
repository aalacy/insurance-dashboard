/* eslint-disable */
import api, { genericHeaders } from './config'
import axios from 'axios'

export const callQuote = async (state, payload, method="POST") => {
	state.loading = true
	let url = `${api}`
	if (payload.id) {
		url += payload.id + '/'
	}
	try {
		// const res = await fetch(url, {
		//     method,
		//     headers: genericHeaders(),
		//     body: JSON.stringify(payload)
	 //  	}).then(res => res.json())
	 	const res = await axios({
	 		url,
	 		method,
	 		data: payload
	 	})
	 	state.quote = res.data
        localStorage.setItem('shell_id', state.quote.id)
	} catch(e) {
		state.error = e.response
	} finally {
		state.loading = false
	};
}

export const createQuote = async (state, payload) => {
	callQuote(state, payload)
}

export const updateQuote = async (state, payload) => {
	callQuote(state, payload, 'PUT')
}

export const getQuote = async (state, payload) => {
	callQuote(state, payload, 'GET')
}