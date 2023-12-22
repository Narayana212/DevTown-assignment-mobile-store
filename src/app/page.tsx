import { connect } from "@/lib/db";
import User from "@/models/userModel";
import { RedirectToSignUp, currentUser, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupPage() {

  const user=await currentUser()
  connect()

  if(!user){
     return  <RedirectToSignUp />
  }
   const email=user?.emailAddresses[0].emailAddress as string
   const username=user?.firstName +" "+ user?.lastName
   console.log(username)
   const existingUser = await User.findOne({ email });
   console.log(existingUser)
   if(existingUser){
    redirect(`/${existingUser._id}`)
   }else{
    const newUser = await  new User({
      email,
      username
    })
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
    redirect(`/${savedUser._id}`)

   }

  return null;
}
