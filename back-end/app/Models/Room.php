<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'price_per_night', 'images'];

    public function images()
    {
        return $this->hasMany(RoomImage::class);
    }
}


