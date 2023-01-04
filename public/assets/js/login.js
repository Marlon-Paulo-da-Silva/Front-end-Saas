
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
        // console.log('csrf-cookie: ', response);
      });
      
      await axios.post('http://api.descomplicando.site:8000/login', formData).then(response => {
        console.log('login: ', response);
        console.log('response.data: ', response.data);

        // Salva os dados na sessionStorage
        // sessionStorage.setItem('user-info', JSON.stringify(response.data));


        // Salvar o Cookie ao lembrar TODO
        // document.cookie =  "user-cookie" + "=" + JSON.stringify(response.data);
        
        
        // Obtém os dados da sessionStorage
        // var session = sessionStorage.getItem('user-info');

        // console.log('Session user-info');
        // console.log(session);

        
      });


      
      await axios.post('/login', response.data).then(response => {
        console.log('login POST: ', response);
      });
      
      // await axios.get('http://api.descomplicando.site:8000/users').then((response) => {
      //   console.log('users: ', response);
      // });
      
      // await axios.get('http://api.descomplicando.site:8000/api/user').then((response) => {
      //   console.log('api user: ', response);
      // });

    // console.log('retorno axios /login')
    // console.log(data)
    console.log('............')

    // window.location.href = "/";
  } catch (error) {
    // console.log(error["message"])
    message.innerHTML  = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Erro!</strong> E-mail ou Senha não conferem.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
  }

  console.log("Entrou no form addeventlistener")
})