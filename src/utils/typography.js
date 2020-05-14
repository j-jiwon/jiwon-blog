import Typography from "typography"

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.6666,
  googleFonts: [
    { name: "Noto Sans KR", styles: ["400"] },
    {
      name: "Noto Serif KR",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Noto Sans KR", "Noto Serif KR", "serif", "sans-serif"],
  bodyFontFamily: ["Noto Sans KR", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
