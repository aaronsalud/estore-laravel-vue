<?php

function getFormattedPrice($price){
    return '$' . number_format($price / 100, 2); 
}