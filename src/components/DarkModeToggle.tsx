import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className={cn(
        "h-9 w-9",
        darkMode && "bg-accent text-accent-foreground"
      )}
    >
      <Sun className={cn("h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all", darkMode && "rotate-180 scale-0")} />
      <Moon className={cn("absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all", darkMode && "rotate-0 scale-100")} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}