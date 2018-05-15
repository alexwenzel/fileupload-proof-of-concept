<?php

use Symfony\Component\HttpFoundation\Request;

require_once __DIR__ . '/vendor/autoload.php';

$app = new Silex\Application();

$app->post('/uploadfile', function (Request $request) use ($app) {

    $file = $request->files->get('image');

    if ($file !== null) {

        $path = 'tmp/';
        $file->move($path, $file->getClientOriginalName());

        return $app->json([
            'status'     => 200,
            'image_path' => "tmp/{$file->getClientOriginalName()}"
        ]);
    }

    return $app->json([
        'status' => 500
    ]);
});

$app->run();
