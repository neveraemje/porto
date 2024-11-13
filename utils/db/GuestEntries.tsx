export async function getGuestbookEntries(){
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            cache: "no-cache"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch guest")
        }

        return res.json()
    } catch (error) {
        console.log("Erro fetch topic", error)
    }
} 


