<?php

namespace App\Http\Controllers\Api;

use App\Models\PageContent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageContentController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->query('lang', 'en');

        $contents = PageContent::all()->mapWithKeys(function ($item) use ($lang) {
            $data = json_decode($item->content, true);
            return [$item->key => $data[$lang] ?? $data['en'] ?? ''];
        });

        return response()->json($contents);
    }
}
