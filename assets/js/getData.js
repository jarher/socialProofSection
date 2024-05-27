async function makeFetch() {
  // data url from github repository
  const response = await fetch(
    "https://raw.githubusercontent.com/jarher/socialProofSection/main/data.json"
  );
  const data = await response.json();
  return data;
}

export async function getData() {
  try {
    const res = await makeFetch();
    return res;
  } catch (error) {
    console.error(error);
  }
}
