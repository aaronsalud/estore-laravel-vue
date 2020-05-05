<?php

function getFormattedPrice($price){
    return '$' . number_format($price / 100, 2); 
}

function setActiveItem($p1, $p2, $styleAtttributes = 'active'){
    return $p1 === $p2 ? $styleAtttributes : '';
}