import {useEffect, useRef} from 'react'

function RenderCountWrapper({children, title, className = '', ...restProps}) {
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current++
  })

  return (
    <div className="py-3">
      <div
        className={`rounded-lg border border-cyan-900 p-3 pt-6 ${className}`}
        {...restProps}
      >
        <div className="-mt-6 w-fit -translate-y-1/2 rounded border border-inherit bg-black px-3 py-0.5 text-sm">
          {title}
          {': '}
          <span
            className="animate-[pulse_1s] font-bold"
            key={renderCount.current}
          >
            {renderCount.current}
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default RenderCountWrapper
