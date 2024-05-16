async function makeFetch() {
  const response = await fetch("../../data.json");
  const data = await response.json();
  return data;
}

export async function getData() {
  try {
    const res = await makeFetch();
    return res;
  } catch (error) {
    console.log(error);
  }
}
