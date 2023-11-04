<?php

namespace App\Http\Controllers;

use App\Models\MstCategory;
use App\Models\TrnTransaction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TransactionController extends Controller
{
    public function index(): Response
    {
        $result = TrnTransaction::join('mst_categories', 'trn_transactions.id_category', '=', 'mst_categories.id')
            ->select('trn_transactions.amount_transaction', 'trn_transactions.desc_transaction', 'trn_transactions.id', 'trn_transactions.id_category', 'mst_categories.type_category', 'mst_categories.name_category')
            ->get();

        $dataCategory = MstCategory::all();

        return Inertia::render('Transaction/View', [
            'dataTrans' => $result,
            'dataCategory' => $dataCategory,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'id' => 'required',
            'amount_transaction' => 'required|numeric',
            'id_category' => 'required',
        ]);
        $data = $request->all();

        $category = TrnTransaction::find($data['id']);

        if ($category) {
            unset($data['id']);
            $category->update($data);
            return Redirect::route('transaction')->with('success', 'Update Success');
        } else {
            return Redirect::route('transaction')->with('error', 'Data tidak ditemukan');
        }

    }

    public function create(Request $request): RedirectResponse
    {

        $this->validate($request, [
            'amount_transaction' => 'required|numeric',
            'id_category' => 'required',
        ]);

        $data = $request->all();

        try {
            TrnTransaction::create($data);

            return Redirect::route('transaction')->with('success', 'Create Success');
        } catch (\Throwable $th) {
            return Redirect::route('transaction')->with('error', 'Create Failed');
        }

    }

    public function delete($id): RedirectResponse
    {

        $category = TrnTransaction::find($id);

        if ($category) {
            $category->destroy($id);
            return Redirect::route('transaction')->with('success', 'Delete Success');
        } else {
            return Redirect::route('transaction')->with('error', 'Data tidak ditemukan');
        }
    }
}
