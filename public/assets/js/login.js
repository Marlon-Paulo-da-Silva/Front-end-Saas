// const axios = require('axios');

const form = document.querySelector("#login-form");
const BASE_URL = 'https://jsonplaceholder.typicode.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    // const {data} = await axios.get(`${BASE_URL}/todos?_limit=5`);

    const formData = new FormData(form);

    console.log('formData')
    console.log(formData)
    console.log('............')

    const {data} = await axios.post('/login', formData);
    console.log('retorno axios /login')
    console.log(data)
    console.log('............')
  } catch (error) {
    
  }

  console.log("Entrou no form addeventlistener")
})