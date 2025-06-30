function SearchItem({title, description, link}) {
  return (
    <article className="flex items-start gap-2 py-2">
      <div className="size-12 flex-none rounded bg-linear-45 from-cyan-500 to-cyan-950"></div>
      <div className="flex-1 space-y-1">
        <h3>
          <a
            href={link}
            target="_blank"
            className="truncate text-cyan-200 transition-[color] hover:text-cyan-400"
          >
            {title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
    </article>
  )
}

export default SearchItem
