<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

use App\Session\Admin\Login as SessionAdminLogin;
use App\Utils\Environment;

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

//LOAD ENVIRONMENT VARS FROM FILE ON ROOT
Environment::load(__DIR__.'/../');



$app = AppFactory::create();

$middleware = function (Request $request, RequestHandler $handler) {

    $response = $handler->handle($request);

    
    
    if(!SessionAdminLogin::isLogged()){
        // header('Location: /login');
        // exit;

        echo "<pre>";
        print_r('Não está logado');
        echo "</pre>";
        // exit();
        
    }
    echo "<pre>";
    print_r('Está SIM logado');
    echo "</pre>";
    // exit();



    return $response;
};

// $app->add($middleware);

$app->get('/', function (Request $request, Response $response, array $args) {
    

    if(!SessionAdminLogin::isLogged()){

        header('location: ' . getenv('BASE_URL') .'/login');
        exit();
        
    }

    echo "<pre>";
    print_r('Está logado');
    print_r($_SESSION);
    echo "</pre>";
    exit();

    view('home', ['title' => 'Inicial']);
    return $response;
});

$app->get('/login', function (Request $request, Response $response, array $args) {
    view('login', ['title' => 'Login']);
    return $response;
});

$app->post('/login', function (Request $request, Response $response, array $args) {

    SessionAdminLogin::login($_POST);
      
    http_response_code(200);


    return $response;
});

$app->run();