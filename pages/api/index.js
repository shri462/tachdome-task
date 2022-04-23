// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getData() {
  const response = await fetch(
    "https://api.spacexdata.com/v3/launches?limit=100"
  );
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
