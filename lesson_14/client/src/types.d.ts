export interface Patient {
  id: string
  fullName: string
  birthDate: string
  gender: "male" | "female"
  phone: string
  email: string
  address: string
  notes?: string
}

export interface PatientsPagination {
  totalPages: number
  remaining: number
  items: Patient[]
}

export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  date: string // ISO string
  reason: string
  status: "active" | "cancelled" | "completed" | "scheduled"
}

export interface AppointmentsPagination {
  totalPages: number
  remaining: number
  items: Appointment[]
}

export interface Doctor {
  id: string
  fullName: string
  specialty: string
  email: string
  phone: string
  room: string
  notes?: string
}

export interface DoctorsPagination {
  totalPages: number
  remaining: number
  items: Doctor[]
}
