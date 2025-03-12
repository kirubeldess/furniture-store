// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import { IProduct } from '@/lib/db/models/product.model'

// import Rating from './rating'
// import { formatNumber } from '@/lib/utils'
// import ProductPrice from './product-price'
// import ImageHover from './image-hover'

// const ProductCard = ({
//   product,
//   hideBorder = false,
//   hideDetails = false,
// }: {
//   product: IProduct
//   hideDetails?: boolean
//   hideBorder?: boolean
//   hideAddToCart?: boolean
// }) => {
//   const ProductImage = () => (
//     <Link href={`/product/${product.slug}`}>
//       <div className='relative h-52'>
//         {product.images.length > 1 ? (
//           <ImageHover
//             src={product.images[0]}
//             hoverSrc={product.images[1]}
//             alt={product.name}
//           />
//         ) : (
//           <div className='relative h-52'>
//             <Image
//               src={product.images[0]}
//               alt={product.name}
//               fill
//               sizes='80vw'
//               className='object-contain'
//             />
//           </div>
//         )}
//       </div>
//     </Link>
//   )
//   const ProductDetails = () => (
//     <div className='flex-1 space-y-2 py-4'>
//       <p className='font-bold'>{product.name}</p>
//       <Link
//         href={`/product/${product.slug}`}
//         className='overflow-hidden text-ellipsis'
//         style={{
//           display: '-webkit-box',
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical',
//         }}
//       >
//         {product.name}
//       </Link>
//       <div className='flex gap-2 justify-center'>
//         <Rating rating={product.avgRating} />
//         <span>({formatNumber(product.numReviews)})</span>
//       </div>

//       <ProductPrice
//         isDeal={product.tags.includes('todays-deal')}
//         price={product.price}
//         listPrice={product.listPrice}
//         forListing
//       />
//     </div>
//   )

//   return hideBorder ? (
//     <div className='flex flex-col'>
//       <ProductImage />
//       {!hideDetails && (
//         <>
//           <div className='p-3 flex-1 text-center'>
//             <ProductDetails />
//           </div>
//         </>
//       )}
//     </div>
//   ) : (
//     <Card className='flex flex-col  '>
//       <CardHeader className='p-3'>
//         <ProductImage />
//       </CardHeader>
//       {!hideDetails && (
//         <>
//           <CardContent className='p-3 flex-1  text-center'>
//             <ProductDetails />
//           </CardContent>
//         </>
//       )}
//     </Card>
//   )
// }

// export default ProductCard






// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import { IProduct } from '@/lib/db/models/product.model'

// import Rating from './rating'
// import { formatNumber } from '@/lib/utils'
// import ProductPrice from './product-price'
// import ImageHover from './image-hover'

// const ProductCard = ({
//   product,
//   hideBorder = false,
//   hideDetails = false,
// }: {
//   product: IProduct
//   hideDetails?: boolean
//   hideBorder?: boolean
//   hideAddToCart?: boolean
// }) => {
//   const ProductImage = () => (
//     <Link href={`/product/${product.slug}`}>
//       <div className="relative h-52">
//         {product.images.length > 1 ? (
//           <ImageHover
//             src={product.images[0]}
//             hoverSrc={product.images[1]}
//             alt={product.name}
//           />
//         ) : (
//           <div className="relative h-52">
//             <Image
//               src={product.images[0]}
//               alt={product.name}
//               fill
//               sizes="80vw"
//               className="object-contain"
//             />
//           </div>
//         )}
//       </div>
//     </Link>
//   )

//   const ProductDetails = () => (
//     <div className="flex-1 space-y-2 py-4">
//       <p className="font-bold">{product.name}</p>
//       <Link
//         href={`/product/${product.slug}`}
//         className="overflow-hidden text-ellipsis"
//         style={{
//           display: '-webkit-box',
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical',
//         }}
//       >
//         {product.name}
//       </Link>
//       <div className="flex gap-2 justify-center">
//         <Rating rating={product.avgRating} />
//         <span>({formatNumber(product.numReviews)})</span>
//       </div>

//       <ProductPrice
//         isDeal={product.tags.includes('todays-deal')}
//         price={product.price}
//         listPrice={product.listPrice}
//         forListing
//       />
//     </div>
//   )

//   return hideBorder ? (
//     <div className="flex flex-col shadow-lg rounded-lg border border-gray-200 bg-white">
//       <ProductImage />
//       {!hideDetails && (
//         <div className="p-3 flex-1 text-center">
//           <ProductDetails />
//         </div>
//       )}
//     </div>
//   ) : (
//     <Card className="flex flex-col shadow-lg rounded-lg border border-gray-200 bg-white">
//       <CardHeader className="p-3">
//         <ProductImage />
//       </CardHeader>
//       {!hideDetails && (
//         <CardContent className="p-3 flex-1 text-center">
//           <ProductDetails />
//         </CardContent>
//       )}
//     </Card>
//   )
// }

// export default ProductCard








import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IProduct } from '@/lib/db/models/product.model'

import Rating from './rating'
import { formatNumber } from '@/lib/utils'
import ProductPrice from './product-price'
import ImageHover from './image-hover'

const ProductCard = ({
  product,
  hideBorder = false,
  hideDetails = false,
}: {
  product: IProduct
  hideDetails?: boolean
  hideBorder?: boolean
  hideAddToCart?: boolean
}) => {
  const ProductImage = () => (
    <Link href={`/product/${product.slug}`}>
      <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
        {product.images.length > 1 ? (
          <ImageHover
            src={product.images[0]}
            hoverSrc={product.images[1]}
            alt={product.name}
          />
        ) : (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </Link>
  )

  const ProductDetails = () => (
    <div className="flex-1 space-y-2 py-4">
      <p className="font-bold">{product.name}</p>
      <Link
        href={`/product/${product.description}`}
        className="overflow-hidden text-ellipsis text-gray-400 text-sm"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {product.name}
      </Link>
      <div className="flex gap-2 justify-center text-sm text-yellow-400 items-center ">
        <Rating rating={product.avgRating} />
        <span>({formatNumber(product.numReviews)})</span>
      </div>

      <ProductPrice
        isDeal={product.tags.includes('todays-deal')}
        price={product.price}
        listPrice={product.listPrice}
        forListing
        className='text-2xl'
      />
    </div>
  )

  return hideBorder ? (
    <div className="flex flex-col shadow-lg rounded-lg border border-gray-200 bg-white">
      <ProductImage />
      {!hideDetails && (
        <div className="p-3 flex-1 text-center">
          <ProductDetails />
        </div>
      )}
    </div>
  ) : (
    // <Card className="flex flex-col shadow-lg rounded-lg border border-gray-200 bg-white ">
    //   <CardHeader className="p-3">
    //     <ProductImage />
    //   </CardHeader>
    //   {!hideDetails && (
    //     <CardContent className="p-3 flex-1 text-center">
    //       <ProductDetails />
    //     </CardContent>
    //   )}
    // </Card>

    <Card className="flex flex-col shadow-lg rounded-lg border border-gray-200 bg-white w-64 md:w-72 lg:w-80 xl:w-96">
  <CardHeader className="p-3">
    <ProductImage />
  </CardHeader>
  {!hideDetails && (
    <CardContent className="p-3 flex-1 text-center">
      <ProductDetails />
    </CardContent>
  )}
</Card>

  )
}

export default ProductCard
