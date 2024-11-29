const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCustomers);
router.get("/:id", controller.getCustomersById);
router.post("/addcustomers", controller.addCustomers);
router.delete("/deletecustomers/:id", controller.deletecustomers);
router.put("/update/:id", controller.updatecustomer);

module.exports = router;
