import WhyChooseUs from "@/components/shared/choose";
import { HomeCard } from "@/components/shared/home/home-card";
import ProductSlider from "@/components/shared/product/product-slider";
import { Card, CardContent } from "@/components/ui/card";
import { getAllCategories, getProductsByTag } from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";

export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 6)
  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
  ]

  const bestSellingProducts = await getProductsByTag({tag: 'best-seller'})
  return (
    <div>
      <div className="hidden md:block">
        <WhyChooseUs />
      </div>
      <HomeCard cards={cards} />
      <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            {/* <ProductSlider title={"Today's Deals"} products={todaysDeals} /> */}
            <ProductSlider
              title='Best Selling Products'
              products={bestSellingProducts}
              // hideDetails
            />
          </CardContent>
        </Card>
    </div>
  )
}