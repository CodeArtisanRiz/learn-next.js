"use client";
import { useRouter } from "next/navigation";
export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="p-4">
      <h1>About Page</h1>
      <div className="content-center text-center">
      <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Go to Home</button> 
      </div>
      
    </div>
  );
}