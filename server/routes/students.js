import { Router } from 'express'
import * as controller from '../controllers/students.js'
// import fetchuser from '../middleware/fetchuser.js'

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: uuid
 *           description: The auto-generated unique UUID of the student.
 *         name:
 *           type: string
 *           description: The name of the student.
 *         email:
 *           type: string
 *           description: The email address of the student.
 *         password:
 *           type: string
 *           description: The account password of the student
 *         phone:
 *           type: string
 *           description: The phone number of the student.
 *       example:
 *         id: 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
 *         name: student1
 *         email: student1@gmail.com
 *         password: password1
 *         phone: 1234567890
 */

/**
 * @swagger
 * tags:
 *  name: Students
 *  description: The student managing API
 */

/**
 * @swagger
 * /api/students:
 *  get:
 *    summary: Returns the list of students.
 *    tags: [Students]
 *    responses:
 *      200:
 *        description: The list of students.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 */
router.get('/', controller.getAllStudents)

/**
 * @swagger
 * /api/students/{id}:
 *  get:
 *    summary: Get students by their ID.
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student ID
 *    responses:
 *      200:
 *        description: The student by it's ID
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Student not found.
 */
router.get('/:id', controller.getStudentById)

/**
 * @swagger
 * /api/students/email/{email}:
 *  get:
 *    summary: Get students by their email.
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: email
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student email
 *    responses:
 *      200:
 *        description: The student by it's email
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Student not found.
 */
router.get('/email/:email', controller.getStudentByEmail)

/**
 * @swagger
 * /api/students/new:
 *  post:
 *    summary: Create new student entry.
 *    tags: [Students]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The student was successfully added.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Student not found.
 */
router.post('/new', controller.createStudent)

/**
 * @swagger
 * /api/students/{id}:
 *  put:
 *    summary: Update student by their ID.
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The student was successfully added.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 */
router.put('/:id', controller.updateStudent)

/**
 * @swagger
 * /api/students/{id}:
 *  delete:
 *    summary: Remove students by their ID.
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Student ID
 *    responses:
 *      200:
 *        description: The student was successfully deleted.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Student not found.
 */
router.delete('/:id', controller.deleteStudent)

export default router
