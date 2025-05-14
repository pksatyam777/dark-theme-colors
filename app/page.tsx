import { ColorPalette } from "@/components/color-palette"
import { DarkModeDemo } from "@/components/dark-mode-demo"

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Dark Mode Color Palette</h1>
            <p className="text-zinc-400 max-w-3xl">
              A comprehensive dark mode color system with different levels of intensity for backgrounds, text, borders,
              and accent colors. These colors are designed to work together while maintaining proper contrast ratios for
              accessibility.
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 text-sm">Designed by</p>
            <p className="text-emerald-400 font-medium">Satyam Singh</p>
          </div>
        </div>

        <ColorPalette />

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-bold tracking-tight">UI Components Demo</h2>
          <p className="text-zinc-400 max-w-3xl">Here's how these colors look when applied to actual UI components:</p>
        </div>

        <DarkModeDemo />

        <footer className="border-t border-zinc-800 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <p className="text-zinc-500 text-sm">© 2025 Dark Mode UI Kit</p>
            <p className="text-zinc-400 text-sm">
              Designed by <span className="text-emerald-400">Satyam Singh</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
