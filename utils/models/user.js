import mongoose, { Schema, models } from "mongoose";

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
      },
      photo: {
        type: String,
        required: true,
      },
    }, 
    { 
      timestamps: true 
    }
)

const User = models.User || mongoose.model('User', userSchema)
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