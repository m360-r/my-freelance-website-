module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        success: "#10b981",
        accent: "#f59e0b",
        neutralGray: "#6b7280"
      },
      boxShadow: {
        "glass-xl": "0 10px 30px rgba(2,6,23,0.25)"
      },
      borderRadius: {
        "xl2": "1.25rem"
      }
    }
  },
  plugins: []
};
