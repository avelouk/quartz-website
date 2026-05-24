import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import headerImageScript from "./scripts/headerImage.inline"

function HeaderImage({ fileData, displayClass }: QuartzComponentProps) {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir} class={classNames(displayClass, "unstyled", "header-wordmark")}>
      <pre class="avelouk-topo" aria-hidden="true"></pre>
      <div class="wordmark-labels">
        <span class="brand">AVELOUK</span>
        <span class="real-name">Karen Galstyan</span>
      </div>
    </a>
  )
}

HeaderImage.afterDOMLoaded = headerImageScript

export default (() => HeaderImage) satisfies QuartzComponentConstructor
