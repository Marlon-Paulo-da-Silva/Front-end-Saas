<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response, array $args) {
    view('home', ['title' => 'Inicial']);
    return $response;
});

$app->get('/login', function (Request $request, Response $response, array $args) {
    view('login', ['title' => 'Login']);
    return $response;
});

$app->post('/login', function () {
    // echo json_encode($_POST);
    echo json_encode($_POST);
    die();
});

$app->run();