<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use BonchDev\uCaller\uCaller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{

	public function enterByPhone(Request $request, uCaller $uCaller){
		$validated = $request->validate([
			'phone' => 'required|regex:/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/m'
		]);

		$phone = $validated['phone'];
		$phone = Str::remove([' ', '-', '(', ')'], $phone);
		$phone = Str::replace('+7', '7', $phone);

		$uCaller->initCall($phone);
		dd($request, $uCaller, $uCaller->responseBody());
	}

}
