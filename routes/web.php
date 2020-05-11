<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'LandingPageController@index')->name('landing');

Route::get('/shop', 'ShopController@index')->name('shop.index');
Route::get('/shop/{product}', 'ShopController@show')->name('shop.show');

Route::get('/cart', 'CartController@index')->name('cart.index');
Route::post('/cart', 'CartController@store')->name('cart.store');
Route::put('/cart/{id}', 'CartController@update')->name('cart.update');
Route::delete('/cart/{id}', 'CartController@destroy')->name('cart.destroy');

Route::post('/cart/saveForLater/{id}', 'SaveForLaterController@store')->name('saveForLater.store');
Route::put('/cart/saveForLater/{id}', 'SaveForLaterController@edit')->name('saveForLater.edit');
Route::delete('/cart/saveForLater/{id}', 'SaveForLaterController@destroy')->name('saveForLater.destroy');

Route::get('/checkout', 'CheckoutController@index')->name('checkout')->middleware('auth');
Route::post('/checkout', 'CheckoutController@store')->name('checkout.store');

Route::get('/guest-checkout', 'CheckoutController@index')->name('guestCheckout.index');

Route::get('/thankyou', 'ConfirmationController@index')->name('confirmation.index');

Route::post('/coupon', 'CouponsController@store')->name('coupon.store');
Route::delete('/coupon', 'CouponsController@destroy')->name('coupon.destroy');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/email-test/{orderId}', function($orderId){
    $order = App\Order::find($orderId);
    return new App\Mail\OrderPlaced($order);
});

Route::get('/search', 'ShopController@search')->name('search');
Route::get('/search-algolia', 'ShopController@searchAlgolia')->name('search-algolia');