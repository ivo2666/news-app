import fetch from "node-fetch";

export default async function handler(request, response) {
  const {query} = request;
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}all?${Object.entries(query)
      .map(([query, value]) => `${query}=${value}`)
      .join("&")}&api_token=${process.env.REACT_APP_API_KEY}`
  );

  const { data } = await res.json();
  return response.status(200).json({ data });
}
