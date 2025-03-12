// import Link from 'next/link'
// import React from 'react'
// import { Card, CardContent,CardFooter  } from '@/components/ui/card'

// type CardItem = {
//   title: string
//   link: { text: string; href: string }
//   items: {
//     name: string
//     items?: string[]
//     image: string
//     href: string
//   }[]
// }

// export function HomeCard({ cards }: { cards: CardItem[] }) {
//   return (
   
//     <div className='flex flex-col items-center justify-center py-4'>
//         <h3 className='pb-4'>Categories to explore</h3>
//       {cards.map((card) => (
//           <Card key={card.title} className='rounded-none flex flex-col px-5'>
//             {/* <h3 className='text-xl font-bold mb-4'>{card.title}</h3> */}
//           <CardContent className='p-4  flex-1'>
//             <div className='flex gap-8'>
//               {card.items.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className='flex flex-col'
//                 >
//                   <p className='text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
//                     {item.name}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </CardContent>
          
          
//           {card.link && (
//             <CardFooter className='items-center justify-center'>
//               <Link href={card.link.href} className='mt-4 block'>
//                 {card.link.text}
//               </Link>
//             </CardFooter>
//           )}
//         </Card>

//       ))}


//     </div>
//   )
// }





'use client'
import Link from 'next/link'
import React, { useState } from 'react'

type CardItem = {
  title: string
  link: { text: string; href: string }
  items: {
    name: string
    href: string
  }[]
}

export function HomeCard({ cards }: { cards: CardItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState(cards[0].title)

  return (

    <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4 p-4 rounded-full w-fit mx-auto font-bold text-3xl font-jost">
            {cards.map((card) => (
            <button
                key={card.title}
                onClick={() => setSelectedCategory(card.title)}
                className={`px-6 py-2 rounded-full transition cursor-pointer ${
                selectedCategory === card.title
                    ? 'bg-white text-black font-medium' 
                    : 'text-gray-500 hover:text-black '
                }`}
            >
                {card.title}
            </button>
            ))}
        </div>


        <div className="bg-white p-4 pl-8 shadow-md rounded-lg w-full max-w-md flex mb-6 font-jost">
            {cards
            .find((card) => card.title === selectedCategory)
            ?.items.map((item) => (
                <Link key={item.name} href={item.href} className="block px-3 md:px-4 py-2  hover:bg-gray-100 hover:rounded-2xl ">
                {item.name}
                </Link>
            ))}
        </div>
    </div> 
  )
}
