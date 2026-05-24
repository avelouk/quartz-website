import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Avelouk",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "avelouk.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Geist",
        body: "Geist",
        code: "Geist Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f4f0",
          lightgray: "#ebeae4",
          gray: "#8a8780",
          darkgray: "#4a4843",
          dark: "#0e0c08",
          secondary: "oklch(0.62 0.16 215)",
          tertiary: "#b8b4a8",
          highlight: "color-mix(in srgb, oklch(0.62 0.16 215) 18%, transparent)",
        },
        darkMode: {
          light: "#0a0a0b",
          lightgray: "#131316",
          gray: "#6e6a60",
          darkgray: "#b9b5ab",
          dark: "#f1efe9",
          secondary: "oklch(0.84 0.18 215)",
          tertiary: "#2c2c33",
          highlight: "color-mix(in srgb, oklch(0.84 0.18 215) 22%, transparent)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
