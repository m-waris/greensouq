"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Collections data with Unsplash image URLs
const COLLECTIONS = [
  {
    id: 1,
    title: "Affordable Indoor Plants",
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 2,
    title: "Air Purifying Plants Bundle",
    image: "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    title: "Air Purifying Plants Sets for Dubai Zone",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 4,
    title: "Annual Flower Sets",
    image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
  {
    id: 5,
    title: "Aquatic Plants",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
  {
    id: 6,
    title: "Artificial Plants",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
  {
    id: 7,
    title: "Aurora Pots",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 8,
    title: "Balcony Plants Home Delivery in Dubai and UAE",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 9,
    title: "Bathroom Plants",
    image: "https://images.unsplash.com/photo-1612363148951-15f16817648f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
  },
  {
    id: 10,
    title: "Beautiful Indoor Plants Home Delivery in Dubai and UAE",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 11,
    title: "Bedroom Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
  },
  {
    id: 12,
    title: "Beginners Plant Sets",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
]

const ITEMS_PER_PAGE = 8

export default function CollectionsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(COLLECTIONS.length / ITEMS_PER_PAGE)

  const paginatedCollections = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
    const endIdx = startIdx + ITEMS_PER_PAGE
    return COLLECTIONS.slice(startIdx, endIdx)
  }, [currentPage])

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="min-h-screen mx-0.5 lg:mx-52 ">
      {/* Breadcrumb Navigation */}
      <div className="px-6 py-6 lg:px-12">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-foreground/50" >Home</Link>
          <ChevronRight className="w-4 h-4 text-foreground/50" />
          <span className="font-medium text-foreground">Collections</span>
        </div>
      </div>

      {/* Collections Grid */}
      <main className="px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedCollections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-center font-medium text-foreground text-sm leading-tight line-clamp-2">
                  {collection.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-1">
          {getPageNumbers().map((page, idx) => (
            <div key={idx}>
              {page === "..." ? (
                <span className="p-2">...</span>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(page as number)}
                  className={currentPage === page ? "font-bold" : ""}
                >
                  {page}
                </Button>
              )}
            </div>
          ))}

          {currentPage < totalPages && (
            <Button variant="ghost" size="sm" onClick={() => setCurrentPage(currentPage + 1)} className="ml-4">
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </main>
    </div>
  )
}
