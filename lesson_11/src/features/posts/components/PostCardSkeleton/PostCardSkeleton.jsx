import clsx from 'clsx/lite'
import styles from './PostCardSkeleton.module.scss'

function PostCardSkeleton({className = '', ...restProps}) {
  return (
    <div className={clsx(styles.card, className)} {...restProps}>
      <div className={styles.title}></div>
      <div className={styles.body}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default PostCardSkeleton
