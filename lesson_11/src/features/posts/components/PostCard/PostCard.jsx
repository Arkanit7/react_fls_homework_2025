import Typography from '@/components/Typography'
import styles from './PostCard.module.scss'
import clsx from 'clsx/lite'
import Reference from '@/components/Reference'

function PostCard({post}) {
  return (
    <article className={styles.card}>
      <Typography
        as="h2"
        variant="h3"
        className={clsx(styles.title, 'truncate')}
      >
        <Reference>{post.title}</Reference>
      </Typography>
      <p className={styles.body}>{post.body}</p>
    </article>
  )
}

export default PostCard
