"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ColorPalette() {
  const colorCategories = [
    {
      name: "Background",
      description: "For page backgrounds, cards, and containers",
      colors: [
        { name: "bg-zinc-950", hex: "#09090b", description: "Main background" },
        { name: "bg-zinc-900", hex: "#18181b", description: "Card background" },
        { name: "bg-zinc-800", hex: "#27272a", description: "Elevated elements" },
        { name: "bg-zinc-700", hex: "#3f3f46", description: "Hover states" },
      ],
    },
    {
      name: "Text",
      description: "For different levels of text hierarchy",
      colors: [
        { name: "text-zinc-50", hex: "#fafafa", description: "Primary text" },
        { name: "text-zinc-300", hex: "#d4d4d8", description: "Secondary text" },
        { name: "text-zinc-400", hex: "#a1a1aa", description: "Tertiary text" },
        { name: "text-zinc-500", hex: "#71717a", description: "Disabled text" },
      ],
    },
    {
      name: "Border",
      description: "For dividers, outlines, and separators",
      colors: [
        { name: "border-zinc-800", hex: "#27272a", description: "Subtle borders" },
        { name: "border-zinc-700", hex: "#3f3f46", description: "Default borders" },
        { name: "border-zinc-600", hex: "#52525b", description: "Prominent borders" },
      ],
    },
    {
      name: "Accent",
      description: "For buttons, links, and interactive elements",
      colors: [
        { name: "bg-emerald-950", hex: "#052e16", description: "Accent background" },
        { name: "bg-emerald-900", hex: "#064e3b", description: "Accent hover" },
        { name: "bg-emerald-800", hex: "#065f46", description: "Accent active" },
        { name: "text-emerald-400", hex: "#34d399", description: "Accent text" },
        { name: "text-emerald-300", hex: "#6ee7b7", description: "Accent text hover" },
      ],
    },
    {
      name: "Error",
      description: "For error states and destructive actions",
      colors: [
        { name: "bg-red-950", hex: "#450a0a", description: "Error background" },
        { name: "bg-red-900", hex: "#7f1d1d", description: "Error hover" },
        { name: "text-red-400", hex: "#f87171", description: "Error text" },
      ],
    },
    {
      name: "Warning",
      description: "For warning states and cautionary elements",
      colors: [
        { name: "bg-amber-950", hex: "#451a03", description: "Warning background" },
        { name: "bg-amber-900", hex: "#78350f", description: "Warning hover" },
        { name: "text-amber-400", hex: "#fbbf24", description: "Warning text" },
      ],
    },
    {
      name: "Success",
      description: "For success states and confirmations",
      colors: [
        { name: "bg-green-950", hex: "#052e16", description: "Success background" },
        { name: "bg-green-900", hex: "#14532d", description: "Success hover" },
        { name: "text-green-400", hex: "#4ade80", description: "Success text" },
      ],
    },
  ]

  return (
    <div className="grid gap-8">
      {colorCategories.map((category) => (
        <Card key={category.name} className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {category.colors.map((color) => (
                <div key={color.name} className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-md ${color.name}`}
                      style={{
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                      }}
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute -top-2 -left-2 h-6 w-6 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
                      onClick={() => {
                        navigator.clipboard.writeText(color.name)
                      }}
                      title="Copy class name"
                    >
                      <CopyIcon className="h-3 w-3" />
                      <span className="sr-only">Copy class name</span>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm text-zinc-300">{color.name}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => {
                          navigator.clipboard.writeText(color.hex)
                        }}
                        title="Copy hex code"
                      >
                        <CopyIcon className="h-3 w-3" />
                        <span className="sr-only">Copy hex code</span>
                      </Button>
                    </div>
                    <p className="text-zinc-400 text-sm">{color.description}</p>
                    <p className="font-mono text-xs text-zinc-500 mt-1">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
