<?php


$dbhost = "d84099.mysql.zonevs.eu";
$dbname = "d84099_tickets";
$dbuser = "d84099_tsystem";
$dbpass = "J5AamdYF8ctP"; 


$db = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname) or die(mysqli_error());
mysqli_query ($db,"SET CHARACTER SET 'utf8'");
mysqli_query ($db,"set character_set_client='utf8'");
mysqli_query ($db,"set character_set_results='utf8'");
mysqli_query ($db,"set collation_connection='utf8_general_ci'");
mysqli_query ($db,"SET NAMES utf8");
mysqli_select_db($db,$dbname) or die("Could not find db"); 



?>