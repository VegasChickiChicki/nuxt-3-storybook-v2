export default defineNuxtPlugin(() => {
	return {
		provide: {
			api: {
				get: () => {
					console.log('fetching data...')

					return 'some fetched data'
				}
			}
		}
	}
})
