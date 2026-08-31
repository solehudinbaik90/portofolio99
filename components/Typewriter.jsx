import React from 'react'
import classNames from 'clsx'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Typewriter = (props) => {
  const {
    children,
    className,
    lineClassName,
    as = 'div',
    lines = [],
    interval = 3000,
    withIcon = true,
    loop = true,
    ...rest
  } = props

  const [index, setIndex] = React.useState(null)
  const [cycle, setCycle] = React.useState(0)

  React.useEffect(() => {
    if (lines.length < 1 && !children) return

    const linesLength = children ? 1 : lines.length

    if (linesLength === 1) {
      const startTimeout = setTimeout(() => setIndex(0), 300)

      if (!loop) return () => clearTimeout(startTimeout)

      const intervalID = setInterval(() => {
        setCycle((c) => c + 1)
      }, interval)

      return () => {
        clearTimeout(startTimeout)
        clearInterval(intervalID)
      }
    }

    if (linesLength > 1) {
      const intervalID = setInterval(() => setIndex((i) => (i + 1) % linesLength), interval)
      return () => clearInterval(intervalID)
    }
  }, [lines, children, interval, loop])

  const Component = as

  return (
    <Component className={classNames('m-0 inline-flex items-baseline font-mono', className)}>
      {withIcon && (
        <IoChevronForwardSharp className="hidden shrink-0 grow-0 self-center text-omega-500 md:block" />
      )}
      <span
        key={`${index}-${cycle}`}
        className={classNames(
          'animate-typewriter overflow-hidden whitespace-nowrap',
          lineClassName
        )}
        {...rest}
      >
        {index !== null && (lines[index] || children)}
      </span>
      <div className="ml-2 -translate-y-2 animate-blink">_</div>
    </Component>
  )
}

export default Typewriter
