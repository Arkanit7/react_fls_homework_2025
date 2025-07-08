import {Link} from 'react-router'
import Clickable from './Clickable'
import frontNavigation from '@/routes/frontNavigation'

function GoHomeLink(props) {
  return (
    <Clickable as={Link} to={frontNavigation.home} type={null} {...props} />
  )
}

export default GoHomeLink
