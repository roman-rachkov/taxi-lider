<?php

namespace App\Providers;

use App\Contracts\Repositories\UserRepositoryContract;
use App\Contracts\Services\PhoneConfirmationContract;
use App\Repositories\UserRepository;
use App\Services\PhoneConfirmationsService;
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
		$this->app->bind(UserRepositoryContract::class, UserRepository::class);
		$this->app->bind(PhoneConfirmationContract::class, PhoneConfirmationsService::class);
	}

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void
	{
		//
	}
}
