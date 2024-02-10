import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function HeaderImage({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
      <a href={baseDir} class={classNames(displayClass, "unstyled")}>
          <main class="neon-title">{title}</main>
      </a>
    </div>
  )
}



export default (() => HeaderImage) satisfies QuartzComponentConstructor
