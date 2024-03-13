import axios from 'axios'
import { baseURL } from './config'

const client = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export { client }
