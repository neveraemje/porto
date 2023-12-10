"use client"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react";

export default function SignInButton() {
return (
    <button onClick={ () => signIn('google')}
    className="
     rounded-xl
     px-4 h-10
     flex items-center gap-2 border
   
      bg-gradient-to-br from-zinc-100 to-zinc-200
       border-zinc-200
        hover:bg-gradient-to-bl
        hover:from-zinc-200 hover:to-zinc-200
      
         dark:from-zinc-800 dark:to-zinc-900
          dark:border-zinc-800
    "
    >
      <FcGoogle size={24}/>  Sign in with Google
    </button>
//     <button
//     className="
//     flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium   rounded-xl mt-1.5 mr-1
     
//   "
//     type="submit"
//   >
//     Sign
//   </button>

    
)
}