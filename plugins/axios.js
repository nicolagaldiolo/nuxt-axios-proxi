export default function ({ $axios, store, redirect }) {

  console.log("Cookies:", store.$cookies.getAll());

  //$axios.setBaseURL('https://jsonplaceholder.typicode.com')
  $axios.setHeader('Nicola', '123')

  $axios.onRequest(config => {
    //console.log('Making request to ' + config.url)
    //console.log('Config', config)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
