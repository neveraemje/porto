import React from 'react'

const guestData = async() => {
    try {
        const URL = process.env.URL
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch guest")
        }

        return res.json()
    } catch (error) {
        console.log("Erro fetch topic", error)
    }
} 

export default async function GuestList() {
    const data = await guestData();

    interface Props  {
        name: string;
        photo: string;
        msg: string;
        _id: string;
      };
    return (
     
        <section className=" mx-0 sm:mx-10 mt-10">
            <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">

            <div className="flex flex-col gap-1 w-full mt-0">
            <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
                <span className=" ml-2">

                Guestbook
                </span>
            </h3>

  <ul className=" space-y-4 mt-0 pl-0">
  
  {data.guest.map((tamu: Props) => (

      <li className="flex gap-4 " key={tamu._id}>
        <div className="relative mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full">
          <img
            alt=""
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className=" h-9 w-9 rounded-full"
            src={tamu.photo}
          />
        </div>
        <div className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
        <div className="justify-between items-center w-full sm:flex">
            <div className="text-sm text-teal-600 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">
              {tamu.name}
            </div>
            <div
              className="text-sm  text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0"
            >
             5 Juli 200sdsd
            </div>
          </div>

          <div className="w-full flex-none text-base text-zinc-800 dark:text-zinc-100 pl-0 pt-2 mt-0">
          {tamu.msg}
          </div>

          
        </div>
      </li>
))}

  </ul>
</div>
</div>
</section>

    );
  };

