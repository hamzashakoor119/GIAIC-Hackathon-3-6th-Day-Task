// import React from 'react'

// const UList = ({unorderedList}) => {
//      return <ul className='flex flex-col gap-4 md:gap-6'>
//    {
//     unorderedList.map((items,index) => {
//         return <li key={index} className={`${index == 0 ? ' tracking-wider font-medium  text-[#9F9F9F]' : 'tracking-wide font-medium ' } text-[1em] md:text-[1.2em] ${index ==1 && 'mt-2 md:mt-4'}`}>{items}</li>
//     })
//    }
//      </ul>
// }

// const Footer = () => {
//   return (
//     <footer className='flex bg-[#FFFFFF] px-6 md:px-8 lg:px-16 gap-y-8 gap-x-6 md:py-8 flex-wrap py-4  justify-between w-full'>
//       <div>
//         <p className='text-[#9F9F9F] text-[1.1em] tracking-wider font-medium mt-auto'>400 University Drive Suite 200 Coral <br /> Gabies , <br /> FL 33134 USA</p>
//       </div>
// <UList unorderedList={['Links', 'Home','Shop', 'About' ,'Contact']} />
// <UList unorderedList={['Help', 'Payment Methods','Returns', 'Privacy Policy' ]} />
//  <div className='flex flex-col gap-4 md:gap-8'>
//     <h1 className='text-lg text-[#9F9F9F] tracking-wider'>NewsLetter</h1>
//     <div>
//               <h3 className="font-medium mb-4 text-[#9F9F9F]">News Letter</h3>
//               <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email Address"
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none transition duration-300 ease-in-out hover:bg-gray-400/40 focus:bg-[#FBEBB5]/50"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-black text-white text-sm transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 rounded-sm"
//                 >
//                   SUBSCRIBE
//                 </button>
//               </form>
//             </div>
//  </div>
//     </footer>
//   )
// }

// export default Footer





import Link from "next/link";

export default function Footer() {
  return (
    <main className="w-full bg-white py-16">
      {/* Instagram Section */}
      <footer className="w-full py-2 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div className="text-sm text-[#9F9F9F] mt-12">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">
                  Home
                </Link>
                <Link href="/Shop" className="hover:underline">
                  Shop
                </Link>
                <Link href="/Blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/Contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">
                  Payment Options
                </Link>
                <Link href="#" className="hover:underline">
                  Returns
                </Link>
                <Link href="#" className="hover:underline">
                  Privacy Policies
                </Link>
              </nav>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">News Letter</h3>
              <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none transition duration-300 ease-in-out hover:bg-gray-400/40 focus:bg-[#FBEBB5]/50"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 rounded-sm"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm">2025 Hamza Shakoor. All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

