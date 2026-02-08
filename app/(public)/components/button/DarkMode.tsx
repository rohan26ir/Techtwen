"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Button from "./Button"

export function DarkMode() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-auto w-auto" />
      ) : (
        <Moon className="h-auto w-auto" />
      )}
    </Button>
  )
}