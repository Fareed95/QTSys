import db from '../db/db.js'

export const getAllStudents = () => db('students').select('*')

export const getStudentById = (id) => db('students').where({ id }).select('*')

export const getStudentByEmail = (email) =>
  db('students').where({ email }).select('*')

export const createStudent = (student) =>
  db('students').insert(student).returning('*')

export const updateStudent = (id, student) =>
  db('students').where({ id }).update(student).returning('*')

export const deleteStudent = (id) =>
  db('students').where({ id }).del().returning('*')
