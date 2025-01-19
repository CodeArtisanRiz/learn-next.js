import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";
type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers() {
    const authObj = await auth()
    const userObj = await currentUser()

    console.log({authObj, userObj});
     
    const res = await fetch("https://678383768b6c7a1316f49f84.mockapi.io/api/users");
    const users: MockUser[] = await res.json(); 
    
    async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch("https://678383768b6c7a1316f49f84.mockapi.io/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
        body: JSON.stringify({ name }),
    });
    const newUser = await res.json();
    revalidatePath("/mock-users");
    console.log(newUser);
    }
    
    return (
        <div className="py-10 px-4 mx-auto">
            <form action={addUser}>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border p-2 rounded text-black"/>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white mx-2 px-4 py-2 rounded"
                >Add User
                </button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
            {users.map((user: MockUser) => (
                <div key={user.id} className="bg-white shadow-md rounded-lg text-gray-700 p-4">
                    {user.name}
                </div>
            ))}
        </div>
        </div>
    );
}