export function handleLoginError(errorCode: number): string {
	switch (errorCode) {
		case 401:
			return 'Unauthorized. Please check your credentials.'
		case 403:
			return 'Forbidden. You do not have permission to access this resource.'
		case 500:
			return 'Server error. Please try again later.'
		case 0:
			return 'Network error. Please check your internet connection.'
		default:
			return 'Unknown error. Please contact support.'
	}
}
