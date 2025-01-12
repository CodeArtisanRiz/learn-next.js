type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers() {
    const res = await fetch("https://678383768b6c7a1316f49f84.mockapi.io/api/users");
    const users: MockUser[] = await res.json(); 
    return (
        <div className="grid grid-cols-4 gap-4 py-10">
            {users.map((user: MockUser) => (
                <div key={user.id} className="bg-white shadow-md rounded-lg text-gray-700 p-4">
                    {user.name}
                </div>
            ))}
        </div>
    );
}