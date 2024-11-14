"use client"
import SignInButton from "./SignInButton";
import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// const InputWithCharCount = () => {
//   const [name, setName] = useState("");
//   const maxLength = 30;

//   return (
//     <div className="relative w-full">
//     <input
//       onChange={(e) => setName(e.target.value)}
//       value={name}
//       type="text"
//       required
//       placeholder="Name"
//       maxLength={maxLength}
//       className="pl-4 pr-12 py-3 mt-1 rounded-2xl 
//         focus:border-teal-600 block w-full
//         border-neutral-300 bg-gray-100 dark:bg-zinc-700/30 text-lg font-medium text-neutral-900 dark:text-neutral-100 
//         focus:outline-none 
//         focus:ring-2 
//         focus:ring-zinc-500 dark:focus:ring-zinc-500"
//     />
//     <span className="absolute inset-y-0 right-4 flex items-center justify-center text-sm text-zinc-400 dark:text-neutral-400">
//       {name.length}/{maxLength}
//     </span>
//   </div>
//   );
// };

function InputWithCharCount({ value, setValue, maxLength, placeholder }: { 
  value: string; 
  setValue: (value: string) => void; 
  maxLength: number; 
  placeholder: string; 
}) {
  return (
      <div className="relative w-full">
          <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={maxLength}
              placeholder={placeholder}
              required
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-zinc-400 dark:text-zinc-600 ">
              {value.length}/{maxLength}
          </span>
      </div>
  );
}


function TextareaWithCharCount({ value, setValue, maxLength, placeholder }: { 
  value: string; 
  setValue: (value: string) => void; 
  maxLength: number; 
  placeholder: string; 
}) {
  return (
      <div className="relative w-full">
          <Textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={maxLength}
              placeholder={placeholder}
              required
          />
          <span className="absolute right-4 bottom-2 text-sm text-zinc-400 dark:text-zinc-600 ">
              {value.length}/{maxLength}
          </span>
      </div>
  );
}


function Form() {
    const [msg, setMsg] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string | undefined>("emje@gmail.com"); // Default email
    const [photo, setPhoto] = useState<string | undefined>("https://lh3.googleusercontent.com/a/ACg8ocJSt4Ow8oBm6rl9HLq--NIuCR_djNqQ40hLu_GbhtOctA=s96-c"); // Default photo
  
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const maxLengthName = 30;
    const maxLengthMsg = 300;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true); // Start loading state

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
            setLoading(false); // End loading state
            router.push('/book');
            window.location.reload();
          } else {
            throw new Error('Failed to sign in the guestbook');
          }
        } catch (error) {
          console.error(error);
          setLoading(false); // End loading state on error
        }
      };
    
      return (
        <div>
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

          {/* <InputWithCharCount/> */}

           {/* <input
         onChange={ (e) => setName(e.target.value)}
          value={name}
          type="text"
          required
           placeholder="Name"
           maxLength={10}
           className="pl-4 pr-4 py-3 mt-1 rounded-2xl 
     focus:border-teal-600 block w-full 
    border-neutral-300 bg-gray-100 dark:bg-zinc-700/30 text-lg font-medium text-neutral-900 dark:text-neutral-100 
    focus:outline-none 
    focus:ring-2 
    focus:ring-zinc-500 dark:focus:ring-zinc-500"
          />  */}

          {/* <Input 
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
       
          />

          <Textarea 
          placeholder="Signature message"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          required
 
          /> */}
          
          <InputWithCharCount
                value={name}
                setValue={setName}
                maxLength={maxLengthName}
                placeholder="Your name"
            />
            <TextareaWithCharCount
                value={msg}
                setValue={setMsg}
                maxLength={maxLengthMsg}
                placeholder="Signature message"
            />

          <SubmitButton loading={loading} />
         

          {/* <textarea
    onChange={(e) => setMsg(e.target.value)}
    value={msg}
    aria-label="Your message"
    placeholder="Signature message"
    name="entry"
    required
    rows={2} // Set the number of rows (2 lines in this case)
    className="pl-4 pr-4 py-4 mt-1 rounded-2xl text-lg font-medium
     focus:border-teal-600 block w-full 
    border-neutral-300 bg-gray-100 dark:bg-zinc-700/30 text-neutral-900 dark:text-neutral-100 
    focus:outline-none 
    focus:ring-2 
    focus:ring-zinc-500 dark:focus:ring-zinc-500"
  /> */}


          {/* <SubmitButton loading={loading} /> */}
        </form>
        </div>
      );
    }

    // function SubmitButton({ loading }: { loading: boolean }) {
    //   return (
    //     <button
    //       type="submit"
    //       className="
    //         flex items-center justify-center px-2 py-1 font-medium rounded-xl
    //         w-24 h-10
    //         border-b-4 
    //         border-l-2 
    //         border-r-2 
    //         border-t-2
    //         bg-gradient-to-br from-zinc-700 to-zinc-800
    //         border-zinc-900 
    //         border-r-zinc-600/60
    //         border-t-zinc-400/50 
    //         border-l-zinc-900/50 
    //         hover:bg-gradient-to-b hover:from-zinc-800 hover:to-zinc-800
    //         text-white
    //         active:border-zinc-950 
    //         active:border-b-zinc-800
    //         active:border-t-4
    //         active:shadow-none
    //         dark:text-zinc-800
    //         dark:from-zinc-100 dark:to-zinc-300
    //         dark:border-zinc-400
    //         dark:border-r-zinc-200
    //         dark:border-t-white
    //         dark:border-l-zinc-200
    //         dark:active:border-t-zinc-400 
    //         dark:active:border-r-zinc-400 
    //         dark:active:border-l-zinc-400 
    //         dark:active:border-b-zinc-300
    //       "
    //       disabled={loading} // Disable button while loading
    //     >
    //       {loading ? (
    //         <svg
    //           className="animate-spin h-5 w-5 mr-2 text-white"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //         >
    //           <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    //           <path
    //             fill="currentColor"
    //             d="M4 12a8 8 0 1 1 8-8V4c-4.418 0-8 3.582-8 8z"
    //           />
    //         </svg>
    //       ) : (
    //         "Submit"
    //       )}
    //     </button>
    //   );
    // }
    

    // function SubmitButton() {
    //   return (
    //     // <button
    //     // type="submit"
    //     //   className="
    //     //   flex items-center justify-center  px-2 py-1 font-medium   rounded-xl
    //     //    w-24 h-10
    //     //     border-b-4 
    //     //     border-l-2 
    //     //     border-r-2 
    //     //     border-t-2
    //     //     bg-gradient-to-br from-zinc-700 to-zinc-800
    //     //     border-zinc-900 
    //     //     border-r-zinc-600/60
    //     //     border-t-zinc-400/50 
    //     //     border-l-zinc-900/50 
    //     //     hover:bg-gradient-to-b hover:from-zinc-800 hover:to-zinc-800
    //     //     text-white 
        
      
    //     //     active:border-zinc-950 
    //     //     active:border-b-zinc-800
    //     //     active:border-t-4
    //     //     active:shadow-none
    
    //     //     dark:text-zinc-800
    //     //     dark:from-zinc-100 dark:to-zinc-300
    //     //     dark:border-zinc-400
    //     //     dark:border-r-zinc-200
    //     //     dark:border-t-white
    //     //     dark:border-l-zinc-200
    //     //     dark:active:border-t-zinc-400 
    //     //     dark:active:border-r-zinc-400 
    //     //     dark:active:border-l-zinc-400 
    //     //     dark:active:border-b-zinc-300
    //     // "
          
    //     // >
    //     //   Submit
    //     // </button>

    //     <Button 
    //     type="submit">
    //     Submit
    //     </Button>

    //   );
    // }
    function SubmitButton({ loading }: { loading: boolean }) {
      return (
        <Button type="submit" disabled={loading} className="flex items-center justify-center">
        {loading ? (
            <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                />
            </svg>
        ) : (
            "Submit"
        )}
    </Button>
      );
  }


export default function UserInfo() {
  
        return <>
        <div className=" prose dark:prose-invert max-w-3xl sm:mt-14 mt-10"> 
       
    <div className=" mx-0 sm:mx-10">
    <h1 className=" text-2xl font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent  mb-0">
          Leave a message for my guestbook
       </h1> 
        <p className="text-sm">If a traveler has the principle to take nothing but photos, leave nothing but footprints,  there is an exception:  <strong>Leave only your signature message.</strong></p>
      

            <Form/>
      
            <hr className="my-8 border-t-2 border-neutral-300 dark:border-neutral-600" />
            </div>
        </div>
        </>


}


export const runtime = 'edge'