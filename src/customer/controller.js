const pool = require("../../db");

const getCustomers = (req, res) => {
  pool.query("SELECT * FROM nodedb", (err, data) => {
    if (err) throw error;
    res.status(200).json(data.rows);
  });
};
const getCustomersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM nodedb WHERE id =$1", [id], (err, data) => {
    if (err) throw error;
    res.status(200).json(data.rows);
  });
};

module.exports = {
  getCustomers,
  getCustomersById,
};
