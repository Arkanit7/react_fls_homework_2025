// routes.js
const API_BASE_URL = 'http://localhost:5000/api'

export default {
  // GET: Отримати всіх вчителів
  getAllTeachers: `${API_BASE_URL}/teachers`,

  // POST: Створити нового вчителя
  addTeacher: `${API_BASE_URL}/teachers`,

  // GET: Отримати вчителя за ID
  getTeacherById: (id) => `${API_BASE_URL}/teachers/${id}`,

  // PUT: Оновити вчителя за ID
  updateTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,

  // DELETE: Видалити вчителя за ID
  deleteTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,
}
