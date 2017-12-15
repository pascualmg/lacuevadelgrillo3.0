<?php
/**
 * Created by PhpStorm.
 * User: Pascual
 * Date: 15/12/2017
 * Time: 19:15
 */
$filenameArray = [];

$handle = opendir(dirname(realpath(__FILE__)).'../images/');
while($file = readdir($handle)){
    if($file !== '.' && $file !== '..'){
        array_push($filenameArray, "images/$file");
    }
}

echo json_encode($filenameArray);