import jwt from 'jsonwebtoken'
const JWT_SECRET =
  '31b1e3f4bf16aab56c07a77e79866aec92514dc4300115d8e5a1300711e86842'

const fetchuser = (req, res, next) => {
  //Get the user from the jwt token and add id to req object
  const token = req.header('authtoken')
  if (!token) {
    res.status(401).send({ error: 'Please authenticate using a valid token' })
  }
  try {
    const data = jwt.verify(token, JWT_SECRET)
    req.user = data.user
    next()
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate using a valid token' })
  }
  const data = jwt.verify(token, JWT_SECRET)
  req.user = data.user
}

export default fetchuser
