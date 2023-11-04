import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

import ModalUpdate from "./Partials/ModalUpdate";
import ModalAdd from "./Partials/ModalAdd";

export default function View({ auth, dataTrans, dataCategory }) {
    function handleDelete(id) {
        router.get(`/transaction/${id}`);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Transaction
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12 flex flex-col items-center justify-center content-center">
                <div className="w-4/5 border border-collapse rounded-md bg-white">
                    <div className="flex flex-col">
                        <div className="m-5">
                            <ModalAdd dataCategory={dataCategory} />
                        </div>
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Type Trasaction
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Name Category
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Amount Transaction
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataTrans.map((item, index) => (
                                                <tr
                                                    className="border-b dark:border-neutral-500"
                                                    key={index}
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.type_category == 1
                                                            ? "Pemasukan"
                                                            : "Pengeluaran"}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {item.name_category}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {
                                                            item.amount_transaction
                                                        }
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.desc_transaction}
                                                    </td>
                                                    <td className="px-6">
                                                        <ModalUpdate
                                                            items={item}
                                                            dataCategory={
                                                                dataCategory
                                                            }
                                                        />

                                                        <button
                                                            type="button"
                                                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                                            onClick={() => {
                                                                handleDelete(
                                                                    item.id
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
