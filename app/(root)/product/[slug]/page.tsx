import { Card, CardContent } from '@/components/ui/card'
import {
  getProductBySlug,
  getRelatedProductsByCategory,
} from '@/lib/actions/product.actions'

import SelectVariant from '@/components/shared/product/select-variant'
import ProductPrice from '@/components/shared/product/product-price'
import ProductGallery from '@/components/shared/product/product-gallery'
import { Separator } from '@/components/ui/separator'
import ProductSlider from '@/components/shared/product/product-slider'
import Rating from '@/components/shared/product/rating'
import Link from 'next/link'
import Menu from '@/components/shared/header/menu'
import data from '@/lib/data'
import { APP_NAME } from '@/lib/constants'
import { CheckCircleIcon, XCircleIcon } from 'lucide-react'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = await getProductBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page: string; color: string; size: string }>
}) {
  const searchParams = await props.searchParams

  const { page, color, size } = searchParams

  const params = await props.params

  const { slug } = params

  const product = await getProductBySlug(slug)

  const relatedProducts = await getRelatedProductsByCategory({
    category: product.category,
    productId: product._id,
    page: Number(page || '1'),
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-xl shadow-sm z-50 border-b border-gray-100">
            <div className="text-amber-600 font-bold text-2xl font-playfair tracking-wide">
            <Link href="/" className="hover:text-amber-700 transition-colors">
                {APP_NAME}
            </Link>
            </div>
            <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            {data.headerMenus.map((menu) => (
                <li key={menu.href}>
                <Link href={menu.href} className="hover:text-amber-600 transition-colors text-lg">
                    {menu.name}
                </Link>
                </li>
            ))}
            <li>
                <Link href="/" className="hover:text-amber-600 transition-colors text-lg">
                About
                </Link>
            </li>
            <li>
                <Link href="/" className="hover:text-amber-600 transition-colors text-lg">
                Contact
                </Link>
            </li>
            </ul>
            <div className="">
            <Menu/>
            </div>
        </nav>

  <main className="pt-28 px-4 md:px-8 max-w-7xl mx-auto">
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 lg:col-span-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <ProductGallery 
            images={product.images}
          />
        </div>

        <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-center space-y-6 p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
              {product.brand}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{product.category}</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-playfair leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-amber-600 font-semibold text-xl mr-2">
                {product.avgRating.toFixed(1)}
              </span>
              <Rating rating={product.avgRating}/>
            </div>
            <span className="text-gray-400 text-sm">
              ({product.numReviews} reviews)
            </span>
          </div>

          <Separator className="my-4 border-gray-100" />

          <div className="space-y-4">
            <ProductPrice
              price={product.price}
              listPrice={product.listPrice}
              isDeal={product.tags.includes("todays-deal")}
              className="text-2xl font-bold text-gray-900"
            />

            <SelectVariant
              product={product}
              size={size || product.sizes[0]}
              color={color || product.colors[0]}
            />
          </div>

          <Separator className="my-4 border-gray-100" />

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Product Details
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        {/* Stock Info */}
        <div className="md:col-span-3 lg:col-span-1">
          <Card className="w-full border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] ">
            <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
              {product.countInStock > 0 && product.countInStock <= 3 && (
                <div className="text-rose-600 font-medium flex items-center gap-2 h-5 w-5">
                  <span>Only {product.countInStock} left</span>
                </div>
              )}
              {product.countInStock !== 0 ? (
                <div className="text-emerald-700 font-medium flex items-center gap-2 ">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className=''>In Stock</span>
                </div>
              ) : (
                <div className="text-rose-600 font-medium flex items-center gap-2">
                  <XCircleIcon className="h-5 w-5" />
                  <span>Out of Stock</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="mb-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 font-playfair">
          Best Sellers in {product.category}
        </h2>
        <p className="text-gray-500 mt-2">Discover our most popular items</p>
      </div>
      <div  className="rounded-xl overflow-hidden">
        <ProductSlider
            products={relatedProducts.data}
        />
      </div>
    </section>
  </main>
</div>
  )
}