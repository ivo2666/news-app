import mockData from './mock-data'

const paramsForAll = [
  'domains=thenextweb.com',
  '&pageSize=30',
  '&apiKey=275bf7558f2a4ada82089bd012922af0',
];

const paramsForOne = [
  '&domains=thenextweb.com',
  '&apiKey=275bf7558f2a4ada82089bd012922af0',
]

const API_URL =
'https://newsapi.org/v2/everything?';


export const getData = async () => {
  const res = await fetch(API_URL + paramsForAll.join());
  const data = await res.json();

  return data.articles || mockData ;
};

export const getOne = async (title) => {
  const query = `q=${title}`
  const res = await fetch(API_URL + query + paramsForOne.join());
  const data = await res.json();
  
  return data?.articles || [mockData.find(n => n.title === title)];
};