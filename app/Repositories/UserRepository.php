<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Contracts\Repositories\UserRepositoryContract;
use App\Models\User;

class UserRepository implements UserRepositoryContract
{

	public function getByPhone(string $phone): User
	{
		return User::firstOrCreate(['phone' => $phone]);
	}
}
