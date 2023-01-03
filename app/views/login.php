<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
  <title><?=$this->e($title);?></title>

  <link rel="shortcut icon" href="assets/img/favicon.png">

  <link rel="stylesheet" href="assets/css/bootstrap.min.css">

  <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css">

  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

  <div class="main-wrapper login-body">
    <div class="login-wrapper">
      <div class="container">
        <img class="img-fluid logo-dark mb-2" src="assets/img/avatar-default.png" alt="Logo">
        <div class="loginbox">
          <div class="login-right">
            <div class="login-right-wrap">
              <h1>Login</h1>
              <p class="account-subtitle">Acesso ao painel</p>
              <form action="index.html" id="login-form">
                <div class="form-group">
                  <label class="form-control-label">Endereço de e-mail</label>
                  <input type="email" name="email" class="form-control" value="marlon@marlon.com">
                </div>
                <div class="form-group">
                  <label class="form-control-label">Senha</label>
                  <div class="pass-group">
                    <input type="password" name="password" class="form-control pass-input"  value="123456">
                    <span class="fas fa-eye toggle-password"></span>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="cb1">
                        <label class="custom-control-label" for="cb1">Lembre-me</label>
                      </div>
                    </div>
                    <div class="col-6 text-end">
                      <a class="forgot-link" href="forgot-password.html">Esqueceu a senha ?</a>
                    </div>
                  </div>
                </div>
                <button class="btn btn-lg btn-block btn-primary w-100" type="submit">Acessar</button>
                <div class="login-or">
                  <span class="or-line"></span>
                  <span class="span-or">ou</span>
                </div>

                <div class="social-login mb-3">
                  <span>Acesse com</span>
                  <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a><a href="#" class="google"><i
                      class="fab fa-google"></i></a>
                </div>

                <div class="text-center dont-have">Ainda não tem uma conta ? <a href="register.html">Cadastrar</a></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <script src="assets/js/jquery-3.6.0.min.js"></script>

  <script src="assets/js/bootstrap.bundle.min.js"></script>

  <script src="assets/js/feather.min.js"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

  <script src="assets/js/login.js"></script>

</body>

</html>