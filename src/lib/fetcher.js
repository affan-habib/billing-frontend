const baseUrl = "192.168.1.135:8088";
// const baseUrl = process.env.REACT_APP_BASE_API_URL;
const protocol = process.env.REACT_APP_API_PROTOCOL || 'http';

const fetcher = async (route, options = {}) => {

  let url = new URL(`${protocol}://${baseUrl}/${route}`)
  const method = options.method || 'get'

  if(method === 'get') {
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]))
  }

  console.log('fetching ....', url)

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer `,
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options
  });

  return await response.json()
}

export default fetcher;
