<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class APIKeysController extends Controller
{
    public function index()
    {
        return Inertia::render('APIKeys');
    }
}
