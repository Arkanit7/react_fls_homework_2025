import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'
import {useParams} from 'react-router'
import {
  useCreatePostMutation,
  useEditPostMutation,
  useGetPostByIdQuery,
} from '@/features/posts/postsApi'
import PostForm from '@/features/posts/components/PostForm'

function PostAdjustPage() {
  const {id} = useParams()
  const shouldEdit = id != null

  const {
    data: post,
    isLoading: isPostLoading,
    isError,
  } = useGetPostByIdQuery(id, {
    skip: !shouldEdit,
  })
  const [createPost, {isLoading: isCreteLoading}] = useCreatePostMutation()
  const [editPost, {isLoading: isEditLoading}] = useEditPostMutation()

  const action = shouldEdit ? (body) => editPost({id, body}) : createPost

  // ! loading state isn't working for mutations
  const isLoading = isPostLoading || isEditLoading || isCreteLoading
  const actionLabel = shouldEdit ? 'Редагувати' : 'Створити'
  const title = shouldEdit ? 'Редагувати пост' : 'Новий пост'

  return (
    <>
      <Container className="flow-6">
        <Typography as="h1" className="text-center">
          {title}
        </Typography>
        <PostForm
          post={post}
          isLoading={isLoading}
          action={action}
          actionLabel={actionLabel}
          isError={isError}
        />
      </Container>
    </>
  )
}

export default PostAdjustPage
