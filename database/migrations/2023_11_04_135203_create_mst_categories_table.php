<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mst_categories', function (Blueprint $table) {
            $table->id();
            $table->boolean('type_category')->comment('1 = pemasukan & 0 = pengeluaran');
            $table->string('name_category');
            $table->text('desc_category')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mst_categories');
    }
};
