function Container({className = '', ...restProps}) {
  return (
    <div className={`max-w-4xl mx-auto px-3 ${className}`} {...restProps} />
  )
}

export default Container
