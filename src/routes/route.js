const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")


router.post("functionup/colleges", collegeController.createCollege)
router.post("/functionup/interns", internController.createIntern)
router.get("/functionup/collegeDetails/", internController.getIntern )


//API for wrong route-Of-API
router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "The api you request is not available"
    })
})




module.exports = router;