<?php
// Get crous menu page
$cafet_iut = "https://www.crous-bfc.fr/restaurant/restaurant-mansart/";
$cafet_iut_content = file_get_contents($cafet_iut);

// shorten the content to optimize DOM search
$shorter_content = preg_match('/<div id="menu-repas">(.*?)<footer id="footer">/ms', $cafet_iut_content, $matches, PREG_OFFSET_CAPTURE);
$matches[0][0] = substr($matches[0][0],0,-20);

// Creating DOM element to navigate the menulist
$document = new DOMDocument();
$document->loadHtml('<html><body><div><div>'.$matches[0][0].'</body></html>');
// getting today menu infos
$bs = $document->getElementById('menu-repas')->childNodes->item(1)->childNodes->item(0)->getElementsByTagName('li');
// listing every meals
$meals = "";
foreach($bs as $item){
     $meals= $meals.utf8_decode($item->nodeValue)."|"; // separator for sending every meals into one field onto the API
}

$return = array("status"=>"ok","date"=>"today","meals"=>substr($meals,0,-1),"separator"=>"|");
Header("Content-Type: text/json");
echo json_encode($return);

?>