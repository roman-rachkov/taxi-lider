<?php

declare(strict_types=1);

namespace App\Contracts\Repositories;

use App\Models\User;

interface UserRepositoryContract
{
	public function getByPhone(string $phone): User;
}
