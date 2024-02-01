import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function HeaderImage({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir} class="unstyled" >
        <main class="neon-title">{title}</main>
    </a>
  )
}



export default (() => HeaderImage) satisfies QuartzComponentConstructor
