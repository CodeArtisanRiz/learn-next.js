type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return (
        <ul className="space-y-4 p-4 container mx-auto">
            {users.map((user: User) => (
                <li key={user.id} className="bg-white border p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-700">{user.email}</p>
                    <p className="text-gray-700">{user.phone}</p>
                </li>
            ))}
        </ul>
    );
}