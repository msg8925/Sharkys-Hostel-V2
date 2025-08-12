<?php

namespace Database\Seeders;

use App\Models\Room;
use App\Models\RoomImage;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoomImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $images = [
            [
                'room_title' => 'Cozy Dorm Room',
                'urls' => [
                    'room_images/dorm1.jpg',
                    'room_images/dorm2.jpg'
                ]
            ],
            [
                'room_title' => 'Private Double Room',
                'urls' => [
                    'room_images/private1.jpg',
                    'room_images/private2.jpg'
                ]
            ],
            [
                'room_title' => 'Family Suite',
                'urls' => [
                    'room_images/family1.jpg'
                ]
            ]
        ];

        foreach ($images as $data) {
            $room = Room::where('title', $data['room_title'])->first();
            if ($room) {
                foreach ($data['urls'] as $url) {
                    RoomImage::create([
                        'room_id' => $room->id,
                        'url' => $url
                    ]);
                }
            }
        }
    }
}
