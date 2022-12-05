<?php
// il mio server prende i dati li elabora, ed espone un altro json che può essere uguale a quello pescato oppure un altro modificato


$string = file_get_contents('db.json');

$list = json_decode($string, true);





header('Content-Type: application/json');
echo json_encode($list);
