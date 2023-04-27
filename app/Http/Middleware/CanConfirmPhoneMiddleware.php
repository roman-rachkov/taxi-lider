<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Symfony\Component\HttpFoundation\Response;
use Watson\Active\Route;

class CanConfirmPhoneMiddleware
{
	/**
	 * Handle an incoming request.
	 *
	 * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		$prevRoute = app('router')
			->getRoutes()
			->match($request->create(url()->previous(), 'POST'))
			->getName();

		if (!in_array($prevRoute, ['confirm-phone', 'confirm-code'])) {
			abort(403);
		}
		return $next($request);
	}
}
