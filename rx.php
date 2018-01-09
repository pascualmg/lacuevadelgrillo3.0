<?php
/**
 * Created by PhpStorm.
 * User: Pascual
 * Date: 09/01/2018
 * Time: 16:33
 */

require_once __DIR__ . '/vendor/autoload.php';

use Rx\Observable;
use React\EventLoop\Factory;
use Rx\Scheduler;


$loop = Factory::create();

//You only need to set the default scheduler once
Scheduler::setDefaultFactory(function() use($loop){
    return new Scheduler\EventLoopScheduler($loop);
});

/*Observable::interval(1000)
    ->take(5)
    ->flatMap(function ($i) {
        return Observable::of($i + 1);
    })
    ->subscribe(
        function ($e) { echo $e, PHP_EOL;},
        function ($error){echo $error;},
        function (){echo 'done';}
        );*/

$stringNumbers = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve"
];

$source = \Rx\Observable::fromArray([1, 2, 3, 4,9,9,9]);
$source
    ->map(function ($item) use($stringNumbers){return $stringNumbers[$item];})
    ->subscribe(
    function ($x) {
        echo 'Next: ', $x, PHP_EOL;
    },
    function (Exception $ex) {
        echo 'Error: ', $ex->getMessage(), PHP_EOL;
    },
    function () {
        echo 'Completed', PHP_EOL;
    }
);

$loop->run();