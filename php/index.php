<?php

include('database/db_connect.php');

$q="SELECT * FROM events";

$res=mysqli_query($db, $q);
$row=mysqli_fetch_array();

$res = mysqli_query($db,$q);
$row = mysqli_fetch_array($res);	
$data_from_db=$row['title'];

echo $data_from_db;


include('database/db_close.php');


?>