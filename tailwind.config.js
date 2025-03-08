module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontSize: {
      h1: ["48px", { lineHeight: "56px" }], // 48px font size with 56px line height
      h2: ["40px", { lineHeight: "48px" }], // 40px font size with 48px line height
      s1: ["32px", { lineHeight: "40px" }], // 32px font size with 40px line height
      s2: ["24px", { lineHeight: "32px" }], // 24px font size with 32px line height
      b1: ["16px", { lineHeight: "24px" }], // 16px font size with 24px line height
      b2: ["14px", { lineHeight: "20px" }], // 14px font size with 20px line height
      caption: ["12px", { lineHeight: "16px" }], // 12px font size with 16px line height
    },

    // Optional line height properties
    lineHeight: {
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
    },
    colors: {
      primary: {
        DEFAULT: "#E35D56",
        dark: "#C53D36",
        light: "#F28B82",
        lighter: "#FDD6D3",
        lightest: "#FDECEC",
      },
      text: {
        DEFAULT: "#211E1E",
        dark: "#211E1E",
        medium: "#6A5F5F",
        light: "#B4A6A6",
        lighter: "#F1E3E3",
      },
      background: {
        DEFAULT: "#FFFFFF",
        dark: "#121212",
      },
      functional: {
        success: "#289B28", // Success color
        error: "#FF3333", // Warning color
        warning: "#FFA333", // Error color
      },
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default body font
        heading: ["Sora", "sans-serif"], // Headings font
      },
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
      },
      borderRadius: {
        small: "8px",
        medium: "16px",
        large: "24px",
      },
    },
  },
  plugins: [],
};
