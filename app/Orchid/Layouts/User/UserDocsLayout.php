<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\User;

use Orchid\Screen\Field;
use Orchid\Screen\Layouts\Rows;
use Orchid\Support\Facades\Layout;

class UserDocsLayout extends Rows
{
	/**
	 * The screen's layout elements.
	 *
	 * @return Field[]
	 */
	public function fields(): array
	{
		return [
			Layout::view('adminUserDocs')

//			Cropper::make('user.attachment')
//				->targetId()
//				->title('Large web banner image, generally in the front and center')
//				->width(1000)
//				->height(500),
		];
	}
}
