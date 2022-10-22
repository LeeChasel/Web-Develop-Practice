function ViewList()
{
    return (
        <div>
            <h1 className="text-center text-purple-600 font-bold">You can view, add and delete data here</h1>
            <div>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                    button 1
                </button>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                    button 2
                </button>
            </div>
            <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Ages</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Contact Number</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="p-3 text-sm text-blue-500 font-bold">Chasel</td>
                        <td className="p-3 text-sm text-gray-700">Male</td>
                        <td className="p-3 text-sm text-gray-700">20</td>
                        <td className="p-3 text-sm text-gray-700">0912345678</td>
                        <td className="p-3 text-sm text-gray-700">sameple@gmail.com</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ViewList;