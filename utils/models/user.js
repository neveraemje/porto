import mongoose, { Schema, models } from "mongoose";
import { DEFAULT_POSTCARD_IMAGE } from "@/lib/postcard-images";

const userSchema = new Schema(
    {
      email: {
          type: String,
          required: true,
      },
      name: {
          type: String,
          required: true,
      },
      msg: {
        type: String,
        required: true,
        maxlength: 220,
      },
      photo: {
        type: String,
        required: true,
      },
      postageImage: {
        type: String,
        default: DEFAULT_POSTCARD_IMAGE,
      },
      cardColor: {
        type: String,
        enum: ["yellow", "red", "blue", "green", "sky", "coral", "lavender", "mint", "rose", "stone"],
        default: "yellow",
      },
    }, 
    { 
      timestamps: true 
    }
)

const User = models.User || mongoose.model('User', userSchema)
if (!User.schema.path('postageImage')) {
  User.schema.add({
    postageImage: {
      type: String,
      default: DEFAULT_POSTCARD_IMAGE,
    },
  })
}
if (!User.schema.path('cardColor')) {
  User.schema.add({
    cardColor: {
      type: String,
      enum: ["yellow", "red", "blue", "green", "sky", "coral", "lavender", "mint", "rose", "stone"],
      default: "yellow",
    },
  })
}
export default User





// interface UserDocument extends Document {
//   email: string;
//   name: string;
// }

// const userSchema = new Schema<UserDocument>(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// type UserModel = Model<UserDocument>;

// const User: UserModel = models.User as UserModel || mongoose.model<UserDocument>('User', userSchema);

// export default User;


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   }
// })

// const User = mongoose.models.user || mongoose.model("user", userSchema)
// export default User
