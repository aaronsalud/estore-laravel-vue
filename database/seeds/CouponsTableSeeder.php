<?php

use App\Coupon;
use Illuminate\Database\Seeder;

class CouponsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Coupon::create([
            'code' => 'ABC123',
            'type' => 'fixed',
            'discount_value' => 30
        ]);

        Coupon::create([
            'code' => 'DEF456',
            'type' => 'percent',
            'discount_percentage' => 50
        ]);
    }
}
