import Cookies from "js-cookie";

const localUrl = "localhost:5000";

// Local computer

const baseUrl = localUrl || process.env.REACT_APP_BASE_API_URL;
const protocol = "http" || process.env.REACT_APP_API_PROTOCOL;

// Virtual computer
// const baseUrl = process.env.REACT_APP_BASE_API_URL || localUrl;
// const protocol = process.env.REACT_APP_API_PROTOCOL || "http" ;
let accessToken = Cookies.get("accessToken");
const fetcher = async (route, options = {}) => {
  let url = new URL(`${protocol}://${baseUrl}/${route}`);
  const method = options.method || "get";

  if (method === "get") {
    Object.keys(options).forEach((key) =>
      url.searchParams.append(key, options[key])
    );
  }

  console.log("fetching ....", url);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    ...options,
  });

  return await response.json();
};

export default fetcher;
