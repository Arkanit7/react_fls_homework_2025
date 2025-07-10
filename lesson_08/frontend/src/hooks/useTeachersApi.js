import apiRoutes from '@/api/apiRoutes'
import {useCallback} from 'react'
import useAxios from './useAxios'

function useTeachersApi() {
  const {data, setData, isLoading, error, fetchData, sendData} = useAxios()

  const createTeacher = useCallback(
    (data) => sendData({method: 'POST', url: apiRoutes.addTeacher, data}),
    [sendData],
  )

  const readTeachers = useCallback(
    () => fetchData({method: 'GET', url: apiRoutes.allTeachers}),
    [fetchData],
  )

  const readTeacher = useCallback(
    (id) => fetchData({method: 'GET', url: apiRoutes.getTeacherById(id)}),
    [fetchData],
  )

  const updateTeacher = useCallback(
    (id, data) =>
      sendData({method: 'PUT', url: apiRoutes.updateTeacherById(id), data}),
    [sendData],
  )

  const deleteTeacher = useCallback(
    (id) => sendData({method: 'DELETE', url: apiRoutes.deleteTeacherById(id)}),
    [sendData],
  )

  return {
    data,
    setData,
    isLoading,
    error,
    createTeacher,
    readTeachers,
    readTeacher,
    updateTeacher,
    deleteTeacher,
  }
}

export default useTeachersApi
