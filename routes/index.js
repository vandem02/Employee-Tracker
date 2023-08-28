const router = require('express').Router()
const departmentRoutes = require('./departmentroute')
const employeeRoutes = require('./employeeroute')
const roleRoutes = require('./roleroute')

router.use('/api/departments', departmentRoutes)
router.use('/api/employees', employeeRoutes)
router.use('/api/roles', roleRoutes)



module.exports = router;