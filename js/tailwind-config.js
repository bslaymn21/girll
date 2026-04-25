tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#991b1b", // Deep Red
        "primary-container": "#7f1d1d",
        "secondary": "#ea580c", // Flame Orange
        "secondary-container": "#c2410c",
        "background": "#fdfcfc",
        "surface": "#ffffff",
        "on-surface": "#1a1010",
        
        "abyss": {
          "surface": "#0a1014",
          "container": "#1a1c1e",
          "primary": "#f87171",
          "secondary": "#fb923c",
          "on-surface": "#f1f5f9"
        }
      },
      "spacing": {
        "base": "8px",
        "xs": "4px",
        "sm": "12px",
        "md": "24px",
        "lg": "48px",
        "xl": "80px",
        "container-max": "1280px"
      },
      "fontFamily": {
        "h1": ["Epilogue", "Noto Kufi Arabic"],
        "body": ["Epilogue", "Noto Sans Arabic"]
      }
    }
  }
}
