import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    // Component.HeaderImage(),
    // Component.Search(),
    // Component.Darkmode()
  ],
  footer: Component.Footer({
    links: {
      YouTube: "",
      GitHub: "https://github.com/avelouk",
      "Printable Minis GPT": "https://chat.openai.com/g/g-ZwDQv0FEg-printable-minis",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    Component.Backlinks(),
    Component.Graph(),
    Component.MobileOnly(Component.TableOfContents())
  ],
  left: [
    Component.HeaderImage(),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (f) => !f.name.startsWith("_Excalidraw"),
    })),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  afterBody: [],
  left: [
    Component.HeaderImage(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (f) => !f.name.startsWith("_Excalidraw"),
    })),
  ],
  right: [],
}
