<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\CanConfirmPhoneMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return Inertia::render('Index', [
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register'),
		'laravelVersion' => Application::VERSION,
		'phpVersion' => PHP_VERSION,
	]);
})->name('home');

Route::middleware(['guest'])->group(function () {
	Route::get('/login', function () {
		return Inertia::render('Login');
	})->name('login');
	Route::post('/confirm-phone', [UserController::class, 'enterByPhone'])->name('confirm-phone');
	Route::post('/confirm-code', [UserController::class, 'confirmCode'])->name('confirm-code')->middleware([CanConfirmPhoneMiddleware::class]);
});

Route::middleware(['auth'])->group(function (){
	Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
	Route::post('/profile/upload', [ProfileController::class, 'upload'])->name('profile.upload');
});

//
//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//
//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});
//
//require __DIR__.'/auth.php';
