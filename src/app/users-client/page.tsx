"use client"
import { useState, useEffect } from "react"

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError("Failed to fetch users");
                if (error instanceof Error) {
                    setError(`Failed to fetch users: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) { return <div>Loading...</div>; }
    if (error) { return <div>{error}</div>; }

    return (
        <ul className="space-y-4 p-4 container mx-auto">
            {users.map((user) => (
                <li key={user.id} className="bg-white border p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-700">{user.email}</p>
                    <p className="text-gray-700">{user.phone}</p>
                </li>
            ))}
        </ul>
    );
}