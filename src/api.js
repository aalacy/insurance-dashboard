/* eslint-disable */
import api, { genericHeaders } from './config'

export const createQuote = async (state, payload) => {
	state.loading = true
	let url = `${api}`
	if (payload.quoteshellId && payload.quoteId) {
		url += `${payload.quoteshellId}/quotes/${payload.quoteId}/`
	}
	if (payload.driverId) {
		url += `drivers/${payload.driverId}/`
	}
	if (payload.vehicleId) {
		url += `vehicles/${payload.vehicleId}/`
	}
	try {
		const res = await fetch(url, {
		    method: "POST",
		    headers: genericHeaders(),
		    body: JSON.stringify(payload)
		  }).then(res => res.json())
		state.quote = res.data.data
	} catch(e) {
		state.error = e.response
	} finally {
		state.loading = false
	};
}