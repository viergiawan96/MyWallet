import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

const ModalAdd = ({ dataCategory }) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        amount_transaction: "",
        desc_transaction: "",
        id_category: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setData(key, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("transaction"), {
            preserveState: true,
            onSuccess: () => {
                setShowModal(false);
            },
        });
    }

    return (
        <>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Add
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add Transaction
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>

                                <div className="relative p-6 flex-auto">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Name Transaction
                                        </label>
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            id="id_category"
                                            onChange={handleChange}
                                        >
                                            <option
                                                defaultValue
                                                selected
                                                disabled
                                                hidden
                                            >
                                                Choose here
                                            </option>
                                            {dataCategory.map((data, index) => (
                                                <option
                                                    value={data.id}
                                                    key={index}
                                                >
                                                    {data.name_category}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.id_category && (
                                            <div>{errors.id_category}</div>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Amount Transaction
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="amount_transaction"
                                            type="text"
                                            placeholder="Name Category"
                                            onChange={handleChange}
                                        />
                                        {errors.amount_transaction && (
                                            <div>
                                                {errors.amount_transaction}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="descCategory"
                                        >
                                            Description Category
                                        </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="desc_transaction"
                                            type="area"
                                            placeholder="Description Category"
                                            rows="4"
                                            cols="50"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={processing}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default ModalAdd;
