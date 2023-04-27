<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\Services\PhoneConfirmationContract;
use BonchDev\uCaller\uCaller;
use Exception;

class PhoneConfirmationsService implements PhoneConfirmationContract
{

	public function __construct(
		private uCaller $uCaller,
	)
	{
	}

	/**
	 * @string $number
	 * @return string
	 * @throws Exception
	 */
	public function sendConfirmationCode(string $number): string
	{
			$response = $this->uCaller->initCall($number);
			if(!$response->status){
				throw new Exception((string)$response->error, $response->code);
			}
			return (string)$response->code;
	}

	public function isPhoneConfirmed(string $number, string $code): bool
	{
		// TODO: Implement isPhoneConfirmed() method.
	}
}
