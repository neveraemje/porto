// import React from "react";
// import fs from "fs"
// import path from "path"

// export async function getIcons(): Promise<string[]> {
//   const iconDir = path.join(process.cwd(), 'public', 'free_icon');
//   const files = fs.readdirSync(iconDir);
//   return files.map((file) => `/free_icon/${file}`);
// }



// const page = async() => {
//   const icons = await getIcons();

//   return (
//     <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-6">
      

//     <section className="mx-0 sm:mx-10">
//     <div className=" flex flex-col">
//         <div className=" flex flex-col justify-center items-center gap-2 text-center">
//           <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">
//           Free islamic iconography
//           </h1>
//           {/* <div className="columns-2 sm:columns-6 gap-4 mt-6 z-20">
//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>

//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>

//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>

//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>

//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>

//             <div className=" h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg">
//               <img
//                 src="/free_icon/home.svg"
//                 className="object-cover w-10 h-10 rounded-lg"
//               />
//             </div>
           
         
//           </div> */}

// <div className="columns-2 sm:columns-6 gap-4 mt-6 z-20">
//               {icons.map((icon, index) => (
//                 <div
//                   key={index}
//                   className="h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg"
//                 >
//                   <img
//                     src={icon}
//                     alt={`Icon ${index + 1}`}
//                     className="object-cover w-10 h-10 rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>

//         </div>

    
//       </div>
//     </section>

 

    
   
   



//     </div>
//   );
// };

// export default page;

import React from "react";
import fs from "fs";
import path from "path";

const page = async () => {
  // Data fetching inside the component
  const getIcons = async (): Promise<string[]> => {
    const iconDir = path.join(process.cwd(), "public", "free_icon");
    const files = fs.readdirSync(iconDir);
    return files.map((file) => `/free_icon/${file}`);
  };

  // Fetch icons
  const icons = await getIcons();

  return (
    <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-6">
      <section className="mx-0 sm:mx-10">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <h1 className="font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">
              Free Islamic Iconography
            </h1>

            <div className="columns-2 sm:columns-6 gap-4 mt-6 z-20">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="h-24 w-24 relative hidden sm:flex mb-4 bg-slate-100 items-center justify-center rounded-lg"
                >
                  <img
                    src={icon}
                    alt={`Icon ${index + 1}`}
                    className="object-cover w-10 h-10 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
