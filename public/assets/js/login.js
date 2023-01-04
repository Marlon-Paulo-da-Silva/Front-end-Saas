
const form = document.querySelector("#login-form");
const message = document.querySelector("#message");
const BASE_URL = 'https://jsonplaceholder.typicode.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {

    const formData = new FormData(form);
    axios.defaults.withCredentials = true;

    // const {data} = await axios.post('http://api.descomplicando.site:8000/sanctum/token', formData);


      await axios.get('http://api.descomplicando.site:8000/sanctum/csrf-cookie').then(response => {
        console.log('csrf-cookie: ', response);
      });
      
      await axios.post('http://api.descomplicando.site:8000/login').then(response => {
        console.log('login: ', response);
      });
      
      await axios.get('http://api.descomplicando.site:8000/users').then((response) => {
        // console.log('users: ', response);
      });
      
      await axios.get('http://api.descomplicando.site:8000/api/user').then((response) => {
        // console.log('api user: ', response);
      });

    // console.log('retorno axios /login')
    // console.log(data)
    console.log('............')
  } catch (error) {
    console.log(error["message"])
    message.innerHTML  = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Erro!</strong> E-mail ou Senha não conferem.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
  }

  console.log("Entrou no form addeventlistener")
})