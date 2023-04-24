<?php

namespace App\Providers;

use BonchDev\uCaller\uCaller;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 */
	public function register(): void
	{
		$this->app->singleton(uCaller::class, fn() => new uCaller(env('UCALLER_ID'), env('UCALLER_KEY')));
	}

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void
	{
		//
	}
}
