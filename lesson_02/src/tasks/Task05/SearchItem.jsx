import {clampText, prettyPrintLink} from '@/utils'
import {EllipsisVerticalIcon} from '@heroicons/react/24/solid'

function SearchItem({logo, siteName, link, title, description}) {
  return (
    <article className="space-y-2 py-4">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={logo} alt="" />
          </div>
          <div>
            <div className="text-sm">{siteName}</div>
            <div className="text-xs flex gap-2 items-center">
              <a
                className="hover:underline hover:text-blue-300"
                href={link}
                tabIndex="-1"
              >
                {prettyPrintLink(link)}
              </a>
              {' · '}
              <a className="text-blue-300 hover:underline" href="#">
                Translate this page
              </a>
              <button type="button">
                <EllipsisVerticalIcon className="size-5 hover:bg-white/25 rounded-full p-0.5" />
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-xl">
          <a className="text-blue-300 hover:underline" href={link}>
            {clampText(title, 69)}
          </a>
        </h3>
      </header>
      <p className="text-sm line-clamp-2">{description}</p>
    </article>
  )
}

export default SearchItem
