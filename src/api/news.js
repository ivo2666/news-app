const params = [
  'domains=thenextweb.com',
  '&pageSize=30',
  '&apiKey=275bf7558f2a4ada82089bd012922af0',

]
const API_URL =
`https://newsapi.org/v2/everything?${params.join()}`;

export const getData = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.articles;
};
