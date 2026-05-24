// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Darkmode({ displayClass }: QuartzComponentProps) {
  return (
    <div class={classNames(displayClass, "darkmode")}>
      <input class="toggle" id="darkmode-toggle" type="checkbox" tabIndex={-1} />
      <label id="toggle-label-light" for="darkmode-toggle" tabIndex={-1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="dayIcon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Light mode</title>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </label>
      <label id="toggle-label-dark" for="darkmode-toggle" tabIndex={-1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="nightIcon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Dark mode</title>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </label>
    </div>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor
