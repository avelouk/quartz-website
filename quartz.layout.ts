import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileNav(),
  ],
  footer: Component.Footer({
    links: {
      // YouTube: "",
      // GitHub: "https://github.com/avelouk"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "/" }),
    Component.ArticleTitle(),
    Component.TagList(),
    Component.ContentMeta(),
  ],
  afterBody: [
    Component.Backlinks(),
    Component.DesktopOnly(Component.Graph()),
    // Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.HeaderImage(),
    Component.Darkmode(),
    Component.TableOfContents(),
    Component.Explorer({
      filterFn: (f) => !f.name.startsWith("_Excalidraw"),
    }),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({ spacerSymbol: "/" }), Component.ArticleTitle(), Component.ContentMeta()],
  afterBody: [],
  left: [
    Component.HeaderImage(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (f) => !f.name.startsWith("_Excalidraw"),
    }),
  ],
  right: [],
}
