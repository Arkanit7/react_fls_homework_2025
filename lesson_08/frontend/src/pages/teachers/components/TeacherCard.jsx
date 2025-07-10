import Clickable from '@/components/Clickable'
import Typography from '@/components/Typography'

import frontNavigation from '@/routes/frontNavigation'
import {FaTrashAlt} from 'react-icons/fa'
import {RiEditFill} from 'react-icons/ri'
import {Link} from 'react-router'
import {twMerge} from 'tailwind-merge'
import {PROFILE_IMAGE_PLACEHOLDER_SRC} from './constants'
import Pressable from '@/components/Pressable'

function TeacherCard({
  variant = 'simple',
  id,
  name,
  subject,
  photo,
  isPending,
  deleteTeacher,
  selectTeacher,
  isSelected,
}) {
  return (
    <article
      className={twMerge(
        'flex items-start gap-4 rounded-xl bg-primary-400 px-4 py-6',
        isSelected && 'ring-3 ring-accent-400',
        isPending && 'pointer-events-none opacity-50',
      )}
    >
      <img
        className="size-20 flex-none rounded-full object-cover ring-3 ring-orange-400"
        src={photo}
        alt=""
        onError={(e) => (e.currentTarget.src = PROFILE_IMAGE_PLACEHOLDER_SRC)}
      />
      <div className="min-w-0 flex-1">
        <Typography as="h2" className="truncate">
          {name}
        </Typography>
        <p className="truncate text-secondary-400">{subject}</p>
      </div>
      {variant === 'dashboard' && (
        <div className="flex-none space-y-2">
          <div className="flex flex-wrap justify-end gap-2">
            <Pressable
              title="Редагувати"
              as={Link}
              variant="warning"
              to={frontNavigation.teachers.getEdit(id)}
            >
              <RiEditFill />
            </Pressable>
            <Pressable title="Видалити" variant="alert" onClick={deleteTeacher}>
              <FaTrashAlt />
            </Pressable>
          </div>
          <Clickable
            size="sm"
            onClick={selectTeacher}
            variant={isSelected ? 'warning' : undefined}
          >
            {isSelected ? 'Зняти' : 'Обрати'}
          </Clickable>
        </div>
      )}
    </article>
  )
}

export default TeacherCard
