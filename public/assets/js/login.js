// const axios = require('axios');

const form = document.querySelector("#login-form");
const BASE_URL = 'https://jsonplaceholder.typicode.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const {data} = await axios.get(`${BASE_URL}/todos?_limit=5`);
    console.log(data)
  } catch (error) {
    
  }

  console.log("Entrou no form addeventlistener")
})