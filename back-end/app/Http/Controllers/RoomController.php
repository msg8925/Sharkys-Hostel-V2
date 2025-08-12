<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoomController extends Controller
{
    //
    public function index()
    {
        // return Room::with('images')->take(3)->get(); // limit to 3 for homepage

        return "Images of rooms.";
    }
}
