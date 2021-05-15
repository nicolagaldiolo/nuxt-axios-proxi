export default function ({ $axios, store }, inject) {

  const cookies = store.$cookies.getAll();

  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  //api.setBaseURL('https://jsonplaceholder.typicode.com')

  // Inject to context as $api
  inject('api', api)
}
