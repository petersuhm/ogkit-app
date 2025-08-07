<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

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

    public function show($id)
    {
        // Hardcoded API key data for now
        $apiKey = [
            'id' => $id,
            'name' => 'Marketing Website',
            'domains' => 'example.com,*.marketing.example.com',
            'signing_enabled' => true,
            'key' => Str::random(8),
            'created_at' => '2024-01-15T10:30:00Z',
        ];

        return Inertia::render('APIKeys/Show', [
            'indexUrl' => route('api-keys.index'),
            'apiKey' => $apiKey,
        ]);
    }
}
