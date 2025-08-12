<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $rooms = [
            [
                'title' => 'Cozy Dorm Room',
                'description' => 'Perfect for solo travelers looking to meet new friends. Includes bunk beds, shared bathroom, and free Wi-Fi.',
                'price_per_night' => 350.00
            ],
            [
                'title' => 'Private Double Room',
                'description' => 'Great for couples or friends wanting more privacy. Includes double bed, private bathroom, and air-conditioning.',
                'price_per_night' => 900.00
            ],
            [
                'title' => 'Family Suite',
                'description' => 'Spacious suite for families, includes 2 bedrooms, kitchenette, and balcony with city view.',
                'price_per_night' => 1800.00
            ]
        ];

        
        foreach ($rooms as $room) {
            Room::create($room);
        }
    
    }
}
