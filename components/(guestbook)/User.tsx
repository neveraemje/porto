"use client"
import SignInButton from "./SignInButton";
import { useState } from 'react';
import { useRef } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Form() {
    const [msg, setMsg] = useState<string | undefined>();
    const [name, setName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>("emje@gmail.com"); // Default email
    const [photo, setPhoto] = useState<string | undefined>("https://lh3.googleusercontent.com/a/ACg8ocJSt4Ow8oBm6rl9HLq--NIuCR_djNqQ40hLu_GbhtOctA=s96-c"); // Default photo
  
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form data submitted:", {
          name,
          email,
          msg,
          photo,
        });
      
      
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              name: name,
              msg: msg,
              photo: photo,
              
            })
          });

          if (res.ok) {
            console.log("Submission successful"); // Log success
            setMsg("");
            // router.push('/guestbook'); // Uncomment if you want to redirect after submission
          } else {
            throw new Error("Failed to sign in the guestbook");
          }
      
          // console.log(res); // Log the response for debugging
      
          if (res.ok) {
            setName("")
            setMsg("")
            router.push('/book');
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
          className=" relative w-full flex flex-col space-y-4"
          ref={formRef}
          onSubmit={handleSubmit}
        >
        
          <input
          onChange={ (e) => setEmail(e.target.value)}
          value={email}
          type="hidden"
          />
          <input
          onChange={ (e) => setPhoto(e.target.value)}
          value={photo}
          type="hidden"
          /> 
           <input
         onChange={ (e) => setName(e.target.value)}
          value={name}
          type="text"
          required
           placeholder="Your name"
           className="pl-4 pr-4 py-3 mt-1 rounded-2xl 
     focus:border-teal-600 block w-full 
    border-neutral-300 bg-gray-100 dark:bg-zinc-700/30 text-lg font-medium text-neutral-900 dark:text-neutral-100 
    focus:outline-none 
    focus:ring-2 
    focus:ring-zinc-500 dark:focus:ring-zinc-500"
          /> 
          <textarea
    onChange={(e) => setMsg(e.target.value)}
    value={msg}
    aria-label="Your message"
    placeholder="Your signature message"
    name="entry"
    required
    rows={2} // Set the number of rows (2 lines in this case)
    className="pl-4 pr-4 py-4 mt-1 rounded-2xl text-lg font-medium
     focus:border-teal-600 block w-full 
    border-neutral-300 bg-gray-100 dark:bg-zinc-700/30 text-neutral-900 dark:text-neutral-100 
    focus:outline-none 
    focus:ring-2 
    focus:ring-zinc-500 dark:focus:ring-zinc-500"
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
          flex items-center justify-center  px-2 py-1 font-medium   rounded-xl
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
          Submit
        </button>
      );
    }

export default function UserInfo() {
  
        return <>
        <div className=" prose dark:prose-invert max-w-3xl sm:mt-14 mt-10"> 
       
    <div className=" mx-0 sm:mx-10">
    <h1 className=" text-2xl font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent  mb-0">
          Leave a message for my guestbook
       </h1> 
        <p className="text-sm">If a traveler has the principle to take nothing but photos, leave nothing but footprints,  there is an exception:  <strong>leaving nothing but your signature message.</strong></p>
      

            <Form/>
            <hr className="my-8 border-t-2 border-neutral-300 dark:border-neutral-600" />
            </div>
        </div>
        </>


}


export const runtime = 'edge'