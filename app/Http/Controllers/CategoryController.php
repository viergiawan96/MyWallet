<?php

namespace App\Http\Controllers;

use App\Models\MstCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $result = MstCategory::all();

        return Inertia::render('Category/View', [
            'dataCategory' => $result,
        ]);
    }
    public function update(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'id' => 'required',
            'name_category' => 'required',
            'type_category' => 'required|boolean',
        ]);

        $data = $request->all();

        $category = MstCategory::find($data['id']);

        if ($category) {
            $category->update([
                'name_category' => $data['name_category'],
                'type_category' => $data['type_category'],
                'desc_category' => $data['desc_category'],
            ]);
            return Redirect::route('category')->with('success', 'Update Success');
        } else {
            return Redirect::route('category')->with('error', 'Data tidak ditemukan');
        }
    }

    public function create(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'name_category' => 'required',
            'type_category' => 'required|boolean',
        ]);

        $data = $request->all();

        MstCategory::create($data);
        return Redirect::route('category')->with('success', 'Create Success');

    }

    public function delete($id): RedirectResponse
    {

        $category = MstCategory::find($id);

        if ($category) {
            $category->destroy($id);
            return Redirect::route('category')->with('success', 'Delete Success');
        } else {
            return Redirect::route('category')->with('error', 'Data tidak ditemukan');
        }
    }
}
