<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\Repositories\UserRepositoryContract;
use App\Contracts\Services\PhoneConfirmationContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{

	public function __construct(
		private PhoneConfirmationContract $phoneConfirmationsService
	)
	{
	}

	public function enterByPhone(Request $request)
	{
		$validated = $request->validate([
			'phone' => 'required|regex:/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/m'
		]);

		$phone = $validated['phone'];
		$phone = Str::remove([' ', '-', '(', ')'], $phone);
		$phone = Str::replace('+7', '7', $phone);

		$code = $this->phoneConfirmationsService->sendConfirmationCode($phone);

		session()->flash('code', Hash::make($code));
		session()->flash('phone', $phone);

		return Inertia::render('ConfirmCodeForm');

	}

	public function confirmCode(Request $request, UserRepositoryContract $userRepository)
	{
		$verified = $request->validate([
			'code' => 'required|regex:/\d{4}/m'
		]);

		$hash = session()->get('code');
		$phone = session()->get('phone');

		if (Hash::check($verified['code'], $hash)) {
			$user = $userRepository->getByPhone($phone);
			Auth::login($user);
			session()->regenerate();
			return redirect(route('profile'));
		}

		return back()->withInput();

	}

}
