
const form = document.querySelector("#login-form");
const message = document.querySelector("#message");
const btnsubmitlogin = document.querySelector("#btn-submit-login");
const BASE_URL = 'https://jsonplaceholder.typicode.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  let logged = false;
  let userData = []

  const formData = new FormData(form);

  btnsubmitlogin.innerHTML = `<span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span> Aguarde...`
  


    axios.defaults.withCredentials = true;

    // const {data} = await axios.post('http://api.descomplicando.site:8000/sanctum/token', formData);
    

      await axios.get('http://api.descomplicando.site:8000/sanctum/csrf-cookie').then(response => {
        logged = true;
      }).catch((erro) => {
        logged = false;
      });
      
      await axios.post('http://api.descomplicando.site:8000/login', formData).then(response => {
        // console.log('login: ', response);
        // console.log('response.data.status: ', response.data.status);

        if(response.data.status == 'error'){
          logged = false;
        }

        if(response.data.status == 'ok'){
          userData = response.data.api_data;

          // console.log('userData: ', userData);
          logged = true;
        }
        
       
        // Salva os dados na sessionStorage
        // sessionStorage.setItem('user-info', JSON.stringify(response.data));


        // Salvar o Cookie ao lembrar TODO
        // document.cookie =  "user-cookie" + "=" + JSON.stringify(response.data);
        
        
        // Obtém os dados da sessionStorage
        // var session = sessionStorage.getItem('user-info');

        // console.log('Session user-info');
        // console.log(session);

      }).catch((erro) => {
        logged = false;
      });


      
      // await axios.post('/login', response.data).then(response => {
      //   logged = true;
      // }).catch((erro) => {
      //   logged = false;
      // });
      
      // await axios.get('http://api.descomplicando.site:8000/users').then((response) => {
      //   console.log('users: ', response);
      // });
      
      // await axios.get('http://api.descomplicando.site:8000/api/user').then((response) => {
      //   console.log('api user: ', response);
      // });

    // console.log('retorno axios /login')
    // console.log(data)
    console.log('............')


    if(logged){

      $.ajax({
        url:"/login",
        method:"POST",
        data: userData,
        dataType:"JSON",
        beforeSend:function()
        {
            // $('#action_button').attr('disabled', 'disabled');
        },
        success:function(data)
        {
            // $('#action_button').attr('disabled', false);
            console.log(data.status)

            if(data.status != 'ok')
            {
              logged = false;
                // if(data.error.first_name_error)
                // {
                //     $('#first_name_error').text(data.error.first_name_error);
                // }
                // if(data.error.last_name_error)
                // {
                //     $('#last_name_error').text(data.error.last_name_error);
                // }
                // if(data.error.age_error)
                // {
                //     $('#age_error').text(data.error.age_error);
                // }
            }
            if(data.status == 'ok')
            {
              btnsubmitlogin.innerHTML = `Pronto !!`
              setTimeout(function(){
                window.location.href = "/";
                // btnsubmitlogin.innerHTML = `Redirecionou !!`
              }, 1000);

              
                // $('#message').html('<div class="alert alert-success">'+data.success+'</div>');

                // $('#action_modal').modal('hide');

                // $('#sample_data').DataTable().destroy();

                // load_data();

                
            }
        }
    });
      
      
      
    }

    if(!logged){
      btnsubmitlogin.innerHTML = `Acessar`

      message.innerHTML  = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Erro!</strong> E-mail ou Senha não conferem.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

      setTimeout(function(){
        message.innerHTML  = ''
      }, 6000)

    }
 

})