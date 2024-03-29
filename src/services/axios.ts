import axios from 'axios'
import { baseURL } from './config'

const client = axios.create({
	baseURL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
})

export { client }
