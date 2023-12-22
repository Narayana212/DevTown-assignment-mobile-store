import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Cart from "./cart-model";
import { auth } from "@clerk/nextjs/server";





const Navbar = async() => {

  const {userId}=auth()
  console.log(userId)

  if(!userId) return <div/>
  return (
    <div className="px-14 py-4 border flex items-center justify-between">
      <Link href="/" className="font-bold  text-2xl">
        DevTown
      </Link>
      <div className="flex items-center gap-5">
      <UserButton afterSignOutUrl="/"/>
      <Cart/>
      </div>
    </div>
  );
};

export default Navbar;