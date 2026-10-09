import { NextRequest, NextResponse } from "next/server"
import { connectMongoDB } from "@/utils/config/mongodb"
import User from "@/utils/models/user"
import {
  DEFAULT_POSTCARD_IMAGE,
  normalizePostcardImage,
} from "@/lib/postcard-images"

const MAX_MESSAGE_LENGTH = 220;
const ALLOWED_CARD_COLORS = new Set(["yellow", "red", "blue", "green", "sky", "coral", "lavender", "mint", "rose", "stone"]);

const sanitizePostageImage = (value) => {
  const postcardImage = normalizePostcardImage(value);
  if (postcardImage) return postcardImage;
  if (typeof value !== "string" || value.length > 3_000_000) return DEFAULT_POSTCARD_IMAGE;
  return /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(value)
    ? value
    : DEFAULT_POSTCARD_IMAGE;
};

// export async function POST(request) {
//     const { name, email} = await request.json()
//     await connectMongoDB()
//     await User.create({name,email})
//     return NextResponse.json({message: "User Registered"}, {status: 201})
// }

export async function POST(request) {
    try {
      const { name, email, photo, msg, postageImage, cardColor } = await request.json();
      if (typeof msg !== "string" || msg.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
          { status: 400 },
        );
      }
      await connectMongoDB();
      await User.create({
        name,
        email,
        photo: photo || "/mj.png",
        msg,
        postageImage: sanitizePostageImage(postageImage),
        cardColor: ALLOWED_CARD_COLORS.has(cardColor) ? cardColor : "yellow",
      });
      return NextResponse.json({ message: "User Registered" }, { status: 201 });
    } catch (error) {
      console.error("Failed to register guest", error);
      return NextResponse.json(
        { error: "Unable to save your message. Please try again." },
        { status: 500 },
      );
    }
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
