<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    //
    public function index()
    {
        // return Room::with('images')->take(3)->get(); // limit to 3 for homepage

        $rooms = Room::with('images')->get();
        return response()->json($rooms);
    }
}
