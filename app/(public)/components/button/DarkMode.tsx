"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Button from "./Button"


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div>


      <div>
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        </Button>
      </div>
      <div>
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        </Button>
      </div>


    </div>
  )
}
