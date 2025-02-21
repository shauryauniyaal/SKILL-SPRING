// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { Button } from './ui/button.jsx'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
// import { checkUser } from '@/lib/checkUser'


// const Header = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch("/api/checkUser");
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/">
//         <Image src="/logo.jpeg"
//         alt="Skill-spring-logo"
//          width={200} 
//          height={60}
//         className="h-12 py-1 w-auto object-contain"
//         />
//         </Link>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <SignedIn>
//             <Link href="/dashboard">
//               <Button
//                 variant="outline"
//                 className="hidden md:inline-flex items-center gap-2"
//               >
//                 <LayoutDashboard className="h-4 w-4" />
//                 Industry Insights
//               </Button>
//               <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
//                 <LayoutDashboard className="h-4 w-4" />
//               </Button>
//             </Link>
          

//           <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <Button className="flex items-center gap-2">
//       <StarsIcon className="h-4 w-4" />
//       <span className="hidden md:block">Growth Tools</span>
//       <ChevronDown className="h-4 w-4"/>

//     </Button>
//     </DropdownMenuTrigger>


//   <DropdownMenuContent align="end" className="w-48">
 
//     <DropdownMenuItem asChild> 
//       <Link href="/resume" className='flex items-center gap-2'>
//       <FileText className="h-4 w-4"/>
//       <span>Build Resume</span>
//       </Link>
//     </DropdownMenuItem>

//     <DropdownMenuItem><Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
//       <PenBox className="h-4 w-4"/>
//       <span>Cover Letter</span>
//       </Link></DropdownMenuItem>

//     <DropdownMenuItem><
//       Link href={"/interview"} className='flex items-center gap-2'>
//       <GraduationCap className="h-4 w-4"/>
//       <span>Interview Prep</span>
//       </Link></DropdownMenuItem>

//   </DropdownMenuContent>
// </DropdownMenu>
// </SignedIn>

 
// <SignedOut>
 

//   <Button variant="outline">Sign In</Button>


// </SignedOut>
// <SignedIn>

// <UserButton  appearance={{
//   elements: {avatarBox:"w-10 h-10",
//     userButtonPopoverCard:"shadow-x1",
//   userPreviewMainIdentifier:"font-semibold",},
// }}
// afterSignedOut="/"/>
// </SignedIn>
//         </div>
//       </nav>

//   </header>
//   )
// }

// export default Header

"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button.jsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
  useEffect(() => {
    const checkUser = async () => {
      try {
        await fetch("/api/checkUser"); // Calls the API to ensure user exists in DB
      } catch (error) {
        console.error("Error checking user:", error);
      }
    };

    checkUser();
  }, []);

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="Skill-spring-logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <Button variant="outline">Sign In</Button>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;