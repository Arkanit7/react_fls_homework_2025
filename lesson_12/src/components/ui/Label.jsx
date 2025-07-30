function Label({...props}) {
  return (
    <>
      <label {...props} />
      <style jsx>{`
        label {
          font-weight: 500;
          font-size: 0.875rem;
        }
      `}</style>
    </>
  )
}

export default Label
