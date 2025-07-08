// routes.js
const API_BASE_URL = import.meta.env.VITE_BASE_API_URL

export default {
  // GET: Отримати всіх вчителів
  allTeachers: `${API_BASE_URL}/teachers`,

  // POST: Створити нового вчителя
  addTeacher: `${API_BASE_URL}/teachers`,

  // GET: Отримати вчителя за ID
  getTeacherById: (id) => `${API_BASE_URL}/teachers/${id}`,

  // PUT: Оновити вчителя за ID
  updateTeacherById: (id) => `${API_BASE_URL}/teachers/${id}`,

  // DELETE: Видалити вчителя за ID
  deleteTeacherById: (id) => `${API_BASE_URL}/teachers/${id}`,
}
