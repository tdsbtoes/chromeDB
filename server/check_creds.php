<?php
date_default_timezone_set('America/New_York');

//**** get user creds
$user = $_GET['user'];
$pw = $_GET['pw'];
$site = $_GET['site'];
$seed = $_GET['seed'];

$rslt = array('ok'=>false, 'user'=>$user);

//**** check proper db file based on $site
//!!!! TESTING ONLY:
//$rslt['ok'] = true;

echo json_encode($rslt);

?>
