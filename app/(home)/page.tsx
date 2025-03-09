import WhyChooseUs from "@/components/shared/choose";
import { HomeCard } from "@/components/shared/home/home-card";
import { getAllCategories } from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";

export default async function HomePage() {
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
  return (
    <div>
      <div className="hidden md:block">
        <WhyChooseUs />
      </div>
      <HomeCard cards={cards} />
    </div>
  )
}