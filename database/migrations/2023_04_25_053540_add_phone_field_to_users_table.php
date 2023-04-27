<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::table('users', function (Blueprint $table) {
			$table->string('phone', 11)->unique();
			$table->string('name')->nullable()->change();
			$table->string('email')->nullable()->change();
			$table->string('password')->nullable()->change();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('users', function (Blueprint $table) {
			$table->dropColumn(['phone']);

			$table->string('name')->change();
			$table->string('email')->change();
			$table->string('password')->change();
		});
	}
};
