<?php

if (isset($_GET['url'])) {

    $GET = explode('/', $_GET['url']);

    switch ($GET[0]) {
        case 'auth':
            require_once 'pages/auth.php';
            break;
        case 'register':
            require_once 'pages/register.php';
            break;
        case 'insertInventory':
            require_once 'pages/insertInventory.php';
            break;
        case 'insertSituation':
            require_once 'pages/insertSituation.php';
            break;

        /*default:
            require_once 'pages/404.php';
            break;*/
    }
} else {
    require_once 'pages/auth.php';
}
?>