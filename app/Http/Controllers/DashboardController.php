<?php

namespace App\Http\Controllers;

use App\Models\TrnTransaction;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {

        $amountIncome = TrnTransaction::join('mst_categories', 'trn_transactions.id_category', '=', 'mst_categories.id')
            ->where('mst_categories.type_category', 1)
            ->sum('amount_transaction');

        $amountExpense = TrnTransaction::join('mst_categories', 'trn_transactions.id_category', '=', 'mst_categories.id')
            ->where('mst_categories.type_category', 0)
            ->sum('amount_transaction');

        $amountCurent = $amountIncome - $amountExpense;

        return Inertia::render('Dashboard', [
            'amountCurent' => $amountCurent,
            'amountIncome' => $amountIncome,
            'amountExpense' => $amountExpense,
        ]);
    }
}
