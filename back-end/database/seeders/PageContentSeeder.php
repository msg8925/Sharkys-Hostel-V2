<?php

namespace Database\Seeders;

use App\Models\PageContent;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $contents = [
            [
                'key' => 'home.hero.title',
                'content' => json_encode([
                    'en' => 'Welcome to SunnyStay Hostel'
                ])
            ],
            [
                'key' => 'home.hero.subtitle',
                'content' => json_encode([
                    'en' => 'Your home away from home in the heart of the city.'
                ])
            ],
            [
                'key' => 'home.about.title',
                'content' => json_encode([
                    'en' => 'About Us'
                ])
            ],
            [
                'key' => 'home.about.body',
                'content' => json_encode([
                    'en' => 'SunnyStay Hostel is a cozy and affordable place for travelers...'
                ])
            ],
            [
                'key' => 'home.location.title',
                'content' => json_encode([
                    'en' => 'Our Location'
                ])
            ],
            [
                'key' => 'home.location.body',
                'content' => json_encode([
                    'en' => 'Located just 5 minutes from the main bus station...'
                ])
            ]
        ];

        foreach ($contents as $item) {
            PageContent::updateOrCreate(['key' => $item['key']], $item);
        }
    }
}
