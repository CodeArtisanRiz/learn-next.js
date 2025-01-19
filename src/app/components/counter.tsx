"use client"; // This file is client-side only
import { use, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {

    // const { isLoaded, userId, isSignedIn, getToken } = useAuth(); // or
    const { isLoaded, isSignedIn, userId } = useUser();

    

    console.log("Counter Component");
    const [count, setCount] = useState(0);
    if(
        !isLoaded || !isSignedIn // or  !userId
        ) return null;
    return (
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
};