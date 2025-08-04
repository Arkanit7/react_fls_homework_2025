import PostDetails from './PostDetails'
import Clickable from '@/components/ui/Clickable'
import {Link} from 'react-router'
import {BookPlusIcon} from 'lucide-react'
import {navigation} from '@/lib/constants'

function PostAddAndDetails({selectedId, setSelectedId}) {
  return (
    <>
      <div className="flow-6 group">
        <Clickable
          className="cta"
          as={Link}
          to={navigation.posts.create.index}
          size="lg"
        >
          <BookPlusIcon />
          Новий пост
        </Clickable>
        {selectedId != null && (
          <PostDetails id={selectedId} setId={setSelectedId} />
        )}
      </div>
      <style jsx>{`
        @media (width < 30rem) {
          .group > :global(.cta) {
            inline-size: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default PostAddAndDetails
