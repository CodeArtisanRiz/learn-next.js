"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Nav = () => {
    const pathname = usePathname();
    return (
        <nav 
        className="flex justify-center items-center"
        >
            <Link href="/" className={pathname === "/" ? "font-bold mr-4 " : "text-blue-500 mr-4"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4 " : "text-blue-500 mr-4"}>About</Link>


            <Link href="/products/1" className={pathname.startsWith("/products") ? "font-bold mr-4 " : "text-blue-500 mr-4"}>Products</Link>
            <Link href="/blog" className="mr-4 text-blue-500">Blog</Link>
            
            {/* <Link href="/login" className="mr-4 text-blue-500">Login</Link>
            <Link href="/register" className="mr-4 text-blue-500">Register</Link> */}

            <SignedOut>
                <SignInButton mode="modal"/>    
            </SignedOut>
                
            <SignedIn>
                <UserButton />    
            </SignedIn>
        </nav>
    );
};
