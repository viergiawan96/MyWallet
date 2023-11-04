import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    amountCurent,
    amountIncome,
    amountExpense,
}) {
    function formatNumber(number) {
        var formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
        return formatter.format(number);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12 ">
                <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-green-400">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-dollar-sign h-12 w-12 text-white"
                            >
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">
                                current balance
                            </h3>
                            <p className="text-3xl">
                                {formatNumber(amountCurent) ?? null}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-blue-400">
                            <svg
                                className="feather feather-dollar-sign h-12 w-12 text-white"
                                version="1.0"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 64 64"
                                enableBackground="new 0 0 64 64"
                                xmlSpace="preserve"
                            >
                                <polyline
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeMiterlimit="10"
                                    points="61,44 61,55 1,55 1,15 61,15 61,26 "
                                />
                                <polyline
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeMiterlimit="10"
                                    points="6,9 54,9 54,15 "
                                />
                                <path
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeMiterlimit="10"
                                    d="M6,9c-2.762,0-5,2.239-5,5"
                                />
                                <path
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeMiterlimit="10"
                                    d="M43.125,26c-4.972,0-9,4.029-9,9c0,4.97,4.028,9,9,9
	H63V26H43.125z"
                                />
                                <circle
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="4"
                                    strokeMiterlimit="10"
                                    cx="44"
                                    cy="35"
                                    r="3"
                                />
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">income</h3>
                            <p className="text-3xl">
                                {formatNumber(amountIncome) ?? null}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-indigo-400">
                            <svg
                                className="feather feather-dollar-sign h-12 w-12 text-white"
                                fill="#FFFFFF"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                                enableBackground="new 0 0 52 52"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M41.4,21c0.8-0.8,0.8-1.9,0-2.7l-15-14.7c-0.8-0.8-2-0.8-2.8,0L8.6,18.3c-0.8,0.8-0.8,1.9,0,2.7l2.8,2.7
	c0.8,0.8,2,0.8,2.8,0l4.7-4.6c0.8-0.8,2.2-0.2,2.2,0.9v27c0,1,0.9,2,2,2h4c1.1,0,2-1.1,2-2V20c0-1.2,1.4-1.7,2.2-0.9l4.7,4.6
	c0.8,0.8,2,0.8,2.8,0L41.4,21z"
                                />
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">expense</h3>
                            <p className="text-3xl">
                                {formatNumber(amountExpense) ?? null}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
