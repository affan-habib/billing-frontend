const baseUrl = "localhost:5000";
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
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzg3Yzk5MDhiMTYzNzRiYzI1NWRjYSIsImlhdCI6MTY2ODg0NDQzOCwiZXhwIjoxNjcxNDM2NDM4fQ.oADm3vr11rce0TkOcgRZ4DEQpTJys8J8Ce_7U5cD0To`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options
  });

  return await response.json()
}

export default fetcher;
