// @ts-ignore: the inline script is bundled, not imported as a module
import script from "./scripts/mobileNav.inline"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function MobileNav({ displayClass }: QuartzComponentProps) {
  return (
    <button
      class={classNames(displayClass, "mobile-nav-toggle")}
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="quartz-body"
      type="button"
    >
      <span class="mn-bars" aria-hidden="true">
        <span class="mn-bar mn-bar-top"></span>
        <span class="mn-bar mn-bar-mid"></span>
        <span class="mn-bar mn-bar-bot"></span>
      </span>
    </button>
  )
}

MobileNav.afterDOMLoaded = script

export default (() => MobileNav) satisfies QuartzComponentConstructor
