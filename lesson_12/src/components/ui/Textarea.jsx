function Textarea({...props}) {
  return (
    <>
      <textarea {...props} />
      <style jsx>{`
        textarea {
          padding-inline: 0.75rem;
          padding-block: 0.25rem;
          border: 1px solid var(--border);
          border-radius: 0.25rem;
          font-size: 0.875rem;
          line-height: 1.5;
          background-color: color-mix(in oklab, var(--input) 30%, transparent);
          outline: none;
          transition-property: color, box-shadow;
          transition-duration: 0.3s;

          resize: vertical;
          overflow: auto;
          min-block-size: 5lh;
          max-block-size: 20lh;
          field-sizing: content;
        }

        textarea:focus-visible {
          border-color: var(--ring);
          box-shadow: 0 0 0 3px
            color-mix(in oklab, var(--ring) 50%, transparent);
        }
      `}</style>
    </>
  )
}

export default Textarea
