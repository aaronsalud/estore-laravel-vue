<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function categories()
    {
        return $this->belongsToMany('App\ProductCategory');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getFormattedPrice()
    {
        return '$' . number_format($this->price / 100, 2);
    }

    public function getImagePath()
    {
        return generateImageLink($this->image, $this->slug);
    }

    public function getImageGalleryPaths()
    {
        $images = json_decode($this->images, true);
        $imagePaths = [];

        if (isset($images) && count($images) > 0) {
            foreach ($images as $image) {
                array_push($imagePaths, generateImageLink($image));
            }
        }
        return $imagePaths;
    }

    public function scopeMightLike($query)
    {
        return $query->inRandomOrder()->take(4);
    }
}
