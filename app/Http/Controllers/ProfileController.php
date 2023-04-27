<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Orchid\Attachment\Models\Attachment;

class ProfileController extends Controller
{

	public function index()
	{
		return Inertia::render('Profile');
	}

	public function upload(Request $request)
	{
		$validated = $request->validate([
			'photos' => 'required'
		]);

		$files = $validated['photos'];

		foreach ($files as $file) {
			$path = $file->store('driver-docs', 'public');
			$attachment = Attachment::create([
				'name' => explode('.', $file->hashName())[0],
				'original_name' => $file->getClientOriginalName(),
				'mime' => $file->getClientMimeType(),
				'extension' => $file->extension(),
				'size' => $file->getSize(),
				'sort' => 0,
				'path' => $path,
				'description' => '',
				'alt' => '',
				'hash' => $file->hashName(),
				'disk' => 'public',
				'user_id' => Auth::user()->id,
				'group' => 0
			]);
			Auth::user()->attachment()->syncWithoutDetaching($attachment);
		}

		return redirect(route('profile'));
	}

}
