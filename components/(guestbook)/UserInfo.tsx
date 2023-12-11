"use client"
import SignInButton from "./SignInButton";
import Image from "next/image";
import { useState } from 'react';
import { useRef } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Form() {
    const [msg, setMsg] = useState<string | undefined>();
    const formRef = useRef<HTMLFormElement>(null);
    const {data: session } = useSession()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: session?.user?.email ?? '',
              name: session?.user?.name ?? '',
              msg: msg,
              photo: session?.user?.image ?? '',
            })
          });
      
          console.log(res); // Log the response for debugging
      
          if (res.ok) {
            setMsg("")
            router.push('/guestbook');
            window.location.reload();
          } else {
            throw new Error('Failed to sign in the guestbook');
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div className="">
        <form
          className=" relative w-full flex"
          ref={formRef}
          onSubmit={handleSubmit}
        >
         <input
          value={session?.user?.name ?? ''}
          type="hidden"
          /> 
          <input
          value={session?.user?.email ?? ''}
          type="hidden"
          />
          <input
          value={session?.user?.image ?? ''}
          type="hidden"
          /> 
          <input
          onChange={ (e) => setMsg(e.target.value)}
          value={msg}
            aria-label="Your message"
            placeholder="Your message..."
            name="entry"
            type="text"
            required
            className="pl-4 pr-32 
            py-3 mt-1 rounded-2xl focus:ring-teal-600 focus:border-teal-600 block w-full border-neutral-300  bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <SubmitButton />
        </form>
        </div>
      );
    }
    function SubmitButton() {
      return (
        <button
        type="submit"
          className="
          flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium   rounded-xl mt-1.5 mr-1
           w-24 h-10
            border-b-4 
            border-l-2 
            border-r-2 
            border-t-2
            bg-gradient-to-br from-zinc-700 to-zinc-800
            border-zinc-900 
            border-r-zinc-600/60
            border-t-zinc-400/50 
            border-l-zinc-900/50 
            hover:bg-gradient-to-b hover:from-zinc-800 hover:to-zinc-800
            text-white 
        
      
            active:border-zinc-950 
            active:border-b-zinc-800
            active:border-t-4
            active:shadow-none
    
            dark:text-zinc-800
            dark:from-zinc-100 dark:to-zinc-300
            dark:border-zinc-400
            dark:border-r-zinc-200
            dark:border-t-white
            dark:border-l-zinc-200
            dark:active:border-t-zinc-400 
            dark:active:border-r-zinc-400 
            dark:active:border-l-zinc-400 
            dark:active:border-b-zinc-300
        "
          
        >
          Sign
        </button>
      );
    }

export default function UserInfo() {
    const { status, data: session } = useSession()

    if (status === 'authenticated') {
        return <>
        <div className=" prose dark:prose-invert max-w-3xl sm:mt-14 mt-10">
        <h1 className=" text-center font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-xl mb-0">
          Hello 
          <span className=" text-teal-600"> {session?.user?.name}</span> 👋,
          </h1> 
          <h1 className=" text-center bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl mb-0 mt-2"> 
          Welcome to my guestbook
          </h1>

    <p className=" text-center mx-6 text-sm  pt-0">
        Excited to have you here! Leave nothing except your signature message.
    </p>
    <div className=" mx-0 sm:mx-10">
            <Form/>
     
            <button onClick={() => signOut()} className=" pt-2"> Sign out</button>
            </div>
        </div>
        </>

    } else {
        return (
            <section className=" prose dark:prose-invert mx-0 sm:mx-10 mt-10">
             <h1 className=" text-2xl font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent  mb-0">
          Sign in to my guestbook
          </h1> 
          <p className="text-sm">If a traveler has the principle to take nothing but photos, leave nothing but footprints,  there is an exception:  <strong>leaving nothing but your signature message.</strong></p>
        
          <SignInButton/>
          <div className=" text-sm mt-2 text-zinc-500 dark:text-zinc-400">*Your data is secure, used only to improve your guestbook experience.</div>
          <hr />
           
            </section>
           



        
            )
    }


}


export const runtime = 'edge'