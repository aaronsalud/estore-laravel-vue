<?php

use RealRashid\SweetAlert\Facades\Alert;

function getFormattedPrice($price){
    return '$' . number_format($price / 100, 2); 
}

function setActiveItem($p1, $p2, $styleAtttributes = 'active'){
    return $p1 === $p2 ? $styleAtttributes : '';
}

function generateImageLink($image, $slug=''){
    if (isset($image) && file_exists('storage/' . $image)) {
        return asset('storage/' . $image);
    }
    else if(!empty($slug) && file_exists('img/products/' . $slug . '.jpg')){
        return asset('img/products/' . $slug . '.jpg');
    }
    else{
        return asset('img/not-found.jpg');
    }
}

function displayErrorToast($message){
    Alert::toast($message,'error');
}