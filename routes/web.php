<?php

use App\Http\Controllers\APIKeysController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('home');
});

Route::get('/home', function () {
    return Inertia::render('Website/Home');
})->name('home');

Route::get('/login', function () {
    if (auth()->check()) {
        return redirect('/dashboard');
    }
    return Inertia::render('Auth/Login');
})->name('login');
Route::get('/register', fn () => Inertia::render('Auth/Register'))->name('register');
Route::post('/login', [LoginController::class, 'authenticate'])->name('login.authenticate');
Route::post('/register', [RegisterController::class, 'register'])->name('register.store');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/api-keys', [APIKeysController::class, 'index'])->name('api-keys.index');
    Route::get('/api-keys/new', [APIKeysController::class, 'create'])->name('api-keys.create');
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});
