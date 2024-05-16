import { getData } from "./getData.js";

async function renderData(getData) {
  console.log(await getData());
}

renderData(getData);
