import { NextRequest, NextResponse } from "next/server"
import { connectMongoDB } from "@/utils/config/mongodb"
import User from "@/utils/models/user"

// export async function POST(request) {
//     const { name, email} = await request.json()
//     await connectMongoDB()
//     await User.create({name,email})
//     return NextResponse.json({message: "User Registered"}, {status: 201})
// }

export async function POST(request) {
    async function registerUser() {
      const { name, email, photo, msg } = await request.json();
      await connectMongoDB();
      await User.create({ name, email, photo, msg });
    }
  
    await registerUser();
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  }

  export async function GET() {
    await connectMongoDB()
    const guest = await User.find()
    return NextResponse.json({ guest })
  }



// import { NextRequest, NextResponse } from "next/server"
// import User from "@/utils/models/auth"
// import { connectMongoDB } from "@/utils/config/dbConfig"


// export async function POST (request: NextRequest) {
//     const { name, email } = await request.json()
//     await connectMongoDB()
//     await User.create({ name, email})
//     return NextResponse.json({ message: "User Registered"}, {status:201})
// }

// import { connect } from "@/utils/config/dbConfig";
// import User from "@/utils/models/auth"
// import bcryptjs from "bcryptjs"
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   await connect()

//   try {
//     const {email, name} = await req.json()
//     const ifUserExist = await User.findOne({email})
//     if (ifUserExist) {
//       return NextResponse.json(
//         { error: "User already exist "},
//         { status: 400}
//       )
//     }

//     const salt = await bcryptjs.getSalt("10")
//     const savedUser = await new User({
//       has
//     })

//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, {status: 500})
    
//   }
  
// }


// import { NextRequest, NextResponse } from "next/server";
// import User from "../../../models/user";
// import { connectMongoDB } from "../../../lib/mongodb";

// export default async function POST(request: NextRequest): Promise<NextResponse> {
//   try {
//     const { name, email } = await request.json();
//     await connectMongoDB();
//     await User.create({ name, email });
//     return NextResponse.json({ message: "User Registered" }, { status: 201 });
//   } catch (error) {
//     console.error("Error processing POST request:", error);
//     return NextResponse.json({ message: "Error processing request" }, { status: 500 });
//   }
// }
