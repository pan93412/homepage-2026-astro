import en from "./en"
import zh from "./zh"

export const messages = { en, zh }
export type Locale = keyof typeof messages
export const locales = [
  { code: "en", language: "en", label: "English" },
  { code: "zh", language: "zh-TW", label: "中文" },
] as const
