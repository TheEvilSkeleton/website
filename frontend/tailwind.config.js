module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColorPrimary: "var(--bg-color-primary)",
        bgColorSecondary: "var(--bg-color-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        colorPrimary: "var(--color-primary)",
        colorSecondary: "var(--color-secondary)",
        colorDanger: "var(--color-danger)",
        colorHighlight: "var(--color-highlight)",
      },
      boxShadow: {
        md: "0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 3px 1px rgba(0, 0, 0, 0.07), 0 2px 6px 2px rgba(0, 0, 0, 0.03)",
        xl: "0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 6px 6px rgba(0, 0, 0, 0.07), 0 2px 6px 2px rgba(0, 0, 0, 0.03)",
      },
      gridTemplateColumns: {
        details: "auto 90% auto",
        details2xl: "auto 1400px auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
