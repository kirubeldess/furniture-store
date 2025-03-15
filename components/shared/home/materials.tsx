import Image from "next/image";

export default function MaterialsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-yellow-500 font-semibold tracking-wide uppercase">Materials</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Very Quality <br /> Materials For Making <br /> Furniture
          </h2>
          <p className="text-gray-600 text-lg">
            Because Panto was very serious about designing furniture for our environment,
            using a very expensive and famous capital but at a relatively low price.
          </p>
          <a href="#" className="text-yellow-500 font-semibold flex items-center gap-2 hover:underline">
            More Info →
          </a>
        </div>

        <div className="hidden md:grid md:w-1/2 grid-cols-3 gap-4 items-center">
          
          <div className="flex flex-col gap-4 ">
            <div className="relative w-full h-28 md:h-32 rounded-lg overflow-hidden shadow-md">
              <Image src="/images/gro3.png" alt="Furniture" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-28 md:h-32 rounded-lg overflow-hidden shadow-md">
              <Image src="/images/chair-1.jpg" alt="Living Room" layout="fill" objectFit="cover"/>
            </div>
          </div>

          <div className="col-span-2 relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/gro2.png" alt="Dining Room" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
