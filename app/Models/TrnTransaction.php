<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrnTransaction extends Model
{
    use HasFactory;
    protected $fillable = ['amount_transaction', 'id_category', 'desc_transaction'];
}
