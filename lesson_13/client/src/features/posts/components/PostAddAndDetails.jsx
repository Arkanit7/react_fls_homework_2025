import PostDetails from './PostDetails'
import Clickable from '@/components/ui/Clickable'
import {Link} from 'react-router'
import {BookPlusIcon} from 'lucide-react'
import {navigation} from '@/lib/constants'

function PostAddAndDetails({selectedId, setSelectedId}) {
  return (
    <div className="flow-10">
      <div className="flow-6">
        <Clickable as={Link} to={navigation.posts.create.index}>
          <BookPlusIcon />
          Новий пост
        </Clickable>
        {selectedId != null && (
          <PostDetails id={selectedId} setId={setSelectedId} />
        )}
      </div>
    </div>
  )
}

export default PostAddAndDetails
