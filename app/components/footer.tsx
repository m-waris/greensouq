"use client"

import type React from "react"

import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Paintbrush as Pinterest,
  Github,
  MessageCircle,
  Youtube,
} from "lucide-react"
import Link from "next/link"

const socialIcons = [
  { icon: Mail, label: "Email", href: "mailto:info@greensouq.ae" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Pinterest, label: "Pinterest", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

const footerLinks = {
  findItFast: [
    { label: "Latest Blogs", href: "#" },
    { label: "FAQ's", href: "#" },
  ],
  importantLinks: [
    { label: "About us", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Shipping charges", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
  hotLinks: [
    { label: "My Account", href: "#" },
    { label: "Checkout", href: "#" },
    { label: "Your Cart", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export default function Footer() {

  return (
    <footer className="">

      {/* Main Footer Content */}
      <div className="bg-[#f4f4f4] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Follow Us */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow us</h3>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="rounded-full bg-gray-400 p-2 text-foreground transition-all hover:bg-black hover:text-white"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Find It Fast */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Find It Fast</h3>
              <ul className="space-y-2">
                {footerLinks.findItFast.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-foreground transition-colors hover:text-black/70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Important Links</h3>
              <ul className="space-y-2">
                {footerLinks.importantLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-foreground transition-colors hover:text-black/70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hot Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Hot Links</h3>
              <ul className="space-y-2">
                {footerLinks.hotLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-foreground transition-colors hover:text-black/70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Mobile:</span>
                  <a href="tel:+971585121105" className="transition-colors hover:text-black/70">
                    +971 58 512 1105
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:info@greensouq.ae" className="transition-colors hover:text-black/70">
                    info@greensouq.ae
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border bg-secondary py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 Greensouq. <br />
              Powered by Shopify
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#0066B2" />
                <text x="24" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                  AMEX
                </text>
              </svg>
              <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#1434CB" />
                <circle cx="18" cy="16" r="8" fill="#EB001B" />
                <circle cx="30" cy="16" r="8" fill="#FF5F00" />
              </svg>
              <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#1A1F71" />
                <text x="24" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  VISA
                </text>
              </svg>
              <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#000000" />
                <text x="24" y="20" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">
                  PAY
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
