import mongoose from "mongoose"

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to MongoDB")
        
    } catch (error) {
        console.log("Error connected to database: ", error )
        
    }
}

// import mongoose from "mongoose";

// export async function  connect(){
//   try {
//     mongoose.connect(process.env.MONGO_URI!);
//     mongoose.connection.on("connected", () => {
//       console.log("connected to MongoDB");
//     })

//     mongoose.connection.on("error", (err) => {
//       console.log("MongoDB error" + err)
//       process.exit()
//     })
  
//   } catch (error: any) {
//     console.log("Error connected to database: ", error);
//   }
// };
