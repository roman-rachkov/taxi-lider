<?php

declare(strict_types=1);

namespace App\Contracts\Services;

interface PhoneConfirmationContract
{
	public function sendConfirmationCode(string $number): string;

	public function isPhoneConfirmed(string $number, string $code): bool;
}
