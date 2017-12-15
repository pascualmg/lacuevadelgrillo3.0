<?php
/**
 * Created by PhpStorm.
 * User: Pascual
 * Date: 15/12/2017
 * Time: 19:15
 */
$relativeDir = '/fotos/';
function cropFrom($from, $str)
{
    $index = strrpos(
        $str,
        $from
    );

    return substr(
        $str,
        $index,
        strlen($str) - $index
        );
}

$filenameArray = [];
$putoPath = dirname(realpath(__FILE__)).$relativeDir;
$handle = opendir($putoPath);
while($file = readdir($handle)){
    if($file !== '.' && $file !== '..'){
        $absolutePathWithFilename = "{$putoPath}/{$file}";

        $filenameArray[] = cropFrom('js',$absolutePathWithFilename);
    }
}
echo json_encode($filenameArray);
//echo json_encode(['mierdaconpasta']);
