import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  // 掃描所有子包的源碼
  content: {
    filesystem: [
      "packages/*/src/**/*.{vue,js,ts,jsx,tsx}",
      "apps/*/src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  },
  // 你的 UnoCSS 配置
  shortcuts: [
    // 自定義快捷方式
    // 圖標基礎樣式
    ["icon-base", "fill-white"],
    ["icon-left", "w-5 h-5 mr-2"],
    ["icon-right", "w-5 h-5 ml-2"],
    ["icon-svg", "w-5 h-5"],
    // 大尺寸圖標
    ["icon-large-left", "w-6 h-6 mr-2"],
    ["icon-large-right", "w-6 h-6 ml-2"],
    ["icon-large-svg", "w-6 h-6"],

    // 小尺寸圖標
    ["icon-small-left", "w-3.5 h-[17px] mr-2"],
    ["icon-small-right", "w-3.5 h-[17px] ml-2"],
    ["icon-small-svg", "w-4 h-4"],

    // 禁用狀態圖標顏色
    ["icon-disabled-outline", "fill-grey-300"],
    ["icon-disabled-primary", "fill-grey-400"],

    // 新增的快捷方式
    ["icon-fail", "fill-error-dark"],
    ["icon-success", "fill-success-dark"],
    ["icon-disabled", "fill-grey-400"],

    // 文字樣式快捷方式
    ["p1", "text-base font-normal leading-6 tracking-[0.56px]"],
    ["p2", "text-sm font-normal leading-5 tracking-[0.56px]"],
    ["p3", "text-xs font-normal leading-4 tracking-[0.56px]"],
    
    // 標題樣式快捷方式
    ["h1", "m-0 text-5xl leading-[48px] tracking-[0.025em] font-bold"],
    ["h2", "m-0 text-3xl leading-9 tracking-[0.025em] font-bold"],
    ["h3", "m-0 text-2xl leading-8 tracking-[0.025em] font-bold"],
    ["h4", "m-0 text-xl leading-7 tracking-[0.025em] font-bold"],
    ["h5", "m-0 text-lg leading-7 tracking-[0.025em] font-bold"],
    ["h6", "m-0 text-base leading-6 tracking-[0.025em] font-bold"],
    
    // 卡片樣式
    ["card", "p-6 rounded bg-bg-light shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]"],
  ],
  rules: [
    // 自定義規則
    [
      /^xicon$/,
      () => ({
        width: "100%",
        height: "100%",
      }),
    ],

    // 大尺寸樣式
    [
      /^large$/,
      () => ({
        ".icon-left, .icon-right": {
          width: "24px",
          height: "24px",
        },
        svg: {
          width: "24px",
          height: "24px",
        },
      }),
    ],

    // 小尺寸樣式
    [
      /^small$/,
      () => ({
        ".icon-left, .icon-right": {
          width: "14px",
          height: "17px",
        },
        svg: {
          width: "16px",
          height: "16px",
        },
      }),
    ],
  ],
  theme: {
    // 主題配置
    colors: {
      // Layout & Text Colors
      "bg-light": "#FFFFFF",
      "bg-dark": "#F3F4F6",
      "bg-blue": "#1E40AF",

      // Border Colors
      border: "#E5E7EB",
      "border-grey": "#E5E7EB",

      // Text Colors
      "text-grey": "#6B7280",
      "text-grey-light": "#9CA3AF",
      "text-grey-dark": "#1F2937",

      // Success Colors (Green)
      "success-light": "#F7FEE7",
      "success-dark": "#65A30D",

      // Error Colors (Red)
      "error-light": "#FEF2F2",
      "error-dark": "#DC2626",

      // Warning Colors (Orange)
      "warning-light": "#FFFBEB",
      "warning-dark": "#D97706",

      // Info Colors (Grey)
      "info-light": "#F3F4F6",
      "info-dark": "#6B7280",

      // Grey Palette
      white: "#FFFFFF",
      black: "#000000",
      "grey-50": "#F9FAFB",
      "grey-100": "#F3F4F6",
      "grey-200": "#E5E7EB",
      "grey-300": "#D1D5DB",
      "grey-400": "#9CA3AF",
      "grey-500": "#6B7280",
      "grey-600": "#4B5563",
      "grey-800": "#1F2937",

      // Blue Palette
      "blue-50": "#EFF6FF",
      "blue-100": "#DBEAFE",
      "blue-200": "#BFDBFE",
      "blue-400": "#60A5FA",
      "blue-500": "#3B82F6",
      "blue-600": "#2563EB",
      "blue-800": "#1E40AF",
      "blue-900": "#1E3A8A",
      "blue-950": "#172554",

      // Indigo Palette
      "indigo-50": "#EEF2FF",
      "indigo-100": "#E0E7FF",
      "indigo-200": "#C7D2FE",
      "indigo-400": "#A5B4FC",
      "indigo-500": "#6366F1",
      "indigo-600": "#4F46E5",
      "indigo-800": "#3730A3",
      "indigo-900": "#312E81",
      "indigo-950": "#1E1B4B",
    },
  },
  presets: [presetUno()],
});
