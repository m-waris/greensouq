"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  image: string
  originalPrice: number
  salePrice: {
    min: number
    max: number
  }
  isSale: boolean
}

interface PromoCard {
  id: string
  title: string
  price: string
  image: string
}

interface Category {
  id: string
  name: string
  image: string
}

const promoCards: PromoCard[] = [
  {
    id: "1",
    title: "Best Seller Large Plants Bundle",
    price: "1050",
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "2",
    title: "Home Decor Plant Bundle",
    price: "799",
    image: "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "3",
    title: "Urban Jungle Bundle",
    price: "725",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
]

const topSellingProducts: Product[] = [
  {
    id: "1",
    name: "3 Dracena Plants Set / Dracena Trio Bundle 80-100cm in Ceramic Pot",
    image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    originalPrice: 1500,
    salePrice: { min: 750, max: 880 },
    isSale: true,
  },
  {
    id: "2",
    name: "Aeschynanthus or Mona Lisa",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    originalPrice: 0,
    salePrice: { min: 125, max: 125 },
    isSale: false,
  },
  {
    id: "3",
    name: 'Aglaonema "Silver Queen" Chinese Evergreen Plant',
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    originalPrice: 45,
    salePrice: { min: 35, max: 80 },
    isSale: true,
  },
  {
    id: "4",
    name: "Aglaonema Pattaya Beauty",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    originalPrice: 55,
    salePrice: { min: 50, max: 160 },
    isSale: true,
  },
  {
    id: "5",
    name: "Aglaonema Pattaya Beauty",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    originalPrice: 75,
    salePrice: { min: 90, max: 150 },
    isSale: true,
  },
  {
    id: "6",
    name: "Aglonema sp (Lady Valentine)",
    image: "https://images.unsplash.com/photo-1612363148951-15f16817648f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    originalPrice: 0,
    salePrice: { min: 65, max: 115 },
    isSale: false,
  },
  {
    id: "7",
    name: "Air Purifying Plants Trio / Plant Set (1xPeace Lily 30-40cm, 1xSpider Plant 30-40cm, 1xZZ",
    image: "https://images.unsplash.com/photo-1604762525953-2c80447cc4a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    originalPrice: 0,
    salePrice: { min: 0, max: 0 },
    isSale: false,
  },
  {
    id: "8",
    name: 'Alocasia "Polly"',
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    originalPrice: 90,
    salePrice: { min: 45, max: 85 },
    isSale: true,
  },
  {
    id: "9",
    name: 'Alocasia Wentii "Hardy Elephant\'s Ear" 30-40cm',
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    originalPrice: 0,
    salePrice: { min: 95, max: 95 },
    isSale: true,
  },
  {
    id: "10",
    name: 'Aloe vera "Indoor" or Medicina Aloe 25-30cm الالوفيرا',
    image: "https://images.unsplash.com/photo-1583753075968-1236ccb83c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1354",
    originalPrice: 165,
    salePrice: { min: 0, max: 0 },
    isSale: false,
  },
]

const categories: Category[] = [
  {
    id: "1",
    name: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
  },
  {
    id: "2",
    name: "Flowers",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1491",
  },
  {
    id: "3",
    name: "Succulents",
    image: "https://images.unsplash.com/photo-1598764557991-b9f211b73b81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: "4",
    name: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
]

export default function HomePageListings() {
  return (
    <main className="w-full bg-background">
      {/* Promotional Banners Section */}
      <section className="px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoCards.map((card) => (
            <div key={card.id} className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-orange-500">{card.price}</p>
                  <p className="text-sm text-orange-500 font-semibold">AED</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 max-w-xs">{card.title}</h3>
                  <Link href='/collections' className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-colors">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Products Section */}
      <section className="px-4 py-12 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Selling Indoor Plants</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topSellingProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative bg-gray-100 overflow-hidden group h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.isSale && (
                  <div className="absolute top-3 left-3 bg-gray-800 text-white px-3 py-1 text-xs font-semibold rounded">
                    Sale
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 h-10">{product.name}</h3>

                {/* Pricing */}
                <div className="mb-3">
                  {product.originalPrice > 0 && (
                    <p className="text-xs text-gray-400 line-through mb-1">Dhs. {product.originalPrice.toFixed(2)}</p>
                  )}
                  <p className="text-sm font-semibold text-gray-900">
                    {product.salePrice.min === product.salePrice.max
                      ? `Dhs. ${product.salePrice.min.toFixed(2)}`
                      : `Dhs. ${product.salePrice.min.toFixed(2)} - Dhs. ${product.salePrice.max.toFixed(2)}`}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-white border border-gray-300 text-gray-900 py-2 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="px-4 py-12 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Categories this Week</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative h-64 rounded-full overflow-hidden cursor-pointer group">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center px-4">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
