<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class APIKeysController extends Controller
{
    public function index()
    {
        return Inertia::render('APIKeys/Index', [
            'createUrl' => route('api-keys.create'),
        ]);
    }

    public function create()
    {
        return Inertia::render('APIKeys/Create', [
            'indexUrl' => route('api-keys.index'),
        ]);
    }
}
