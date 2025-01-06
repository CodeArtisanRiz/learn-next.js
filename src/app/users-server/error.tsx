"use client"

import { useEffect } from "react"

export default function Error({error}: {error: Error}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl text-red-500">{`Error fetching users data : ${error}`}</h1>{/* <p>{`Error: ${error}`}</p> */}
        </div>
    );
}