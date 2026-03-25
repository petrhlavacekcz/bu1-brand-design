const preset = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#d2147c",
          black: "#141414",
          white: "#FFFFFF",
        },
        surface: {
          base: "#FFFFFF",
          inverse: "#141414",
        },
        text: {
          base: "#141414",
          inverse: "#FFFFFF",
        },
        border: {
          strong: "#141414",
          inverse: "#FFFFFF",
        },
        action: {
          primary: "#d2147c",
          primaryHover: "#141414",
          secondary: "#141414",
          secondaryHover: "#d2147c",
        },
        price: {
          base: "#141414",
        },
      },
      fontFamily: {
        heading: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Nunito Sans", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1", fontWeight: "700" }],
        "heading-lg": ["2rem", { lineHeight: "1.05", fontWeight: "700" }],
        "heading-md": ["1.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "title-lg": ["1.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "600" }],
        label: ["0.875rem", { lineHeight: "1.2", fontWeight: "700" }],
        price: ["1.375rem", { lineHeight: "1.1", fontWeight: "800" }],
      },
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        md: "0.5rem",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      boxShadow: {
        cta: "0 10px 24px rgba(210, 20, 124, 0.22)",
        card: "0 8px 24px rgba(20, 20, 20, 0.08)",
      },
      maxWidth: {
        "buy-box": "28rem",
      },
    },
  },
};

export default preset;
