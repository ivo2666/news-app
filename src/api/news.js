import mockData from "./mock-data";

const params = [
  "locale=bg",
  "language=bg",
]

export const getData = async () => {
  const res = await fetch(`/api/news/all?${params.join("&")}`);
  const {data} = await res.json();
  return data || mockData;
};

export const getOne = async (uuid) => {
  const res = await fetch(`/api/news/uuid/${uuid}`);
  const {data} = await res.json();
  if(!data || data.error) {
    return  mockData.find((n) => n.uuid === Number(uuid))
  }
  return data
};
