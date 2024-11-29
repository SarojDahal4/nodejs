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

// const addCustomers = (req, res) => {
//   const { name, age } = req.body;
//   pool.query("INSERT INTO nodebd (name, age) VALUES ($1, $2)", (err, res) => {
//     if (err) throw error;
//     res.status(201).send("created");
//   });
// };
const addCustomers = (req, res) => {
  const { name, age } = req.body;

  pool.query(
    "INSERT INTO nodedb (name, age) VALUES ($1, $2)",
    [name, age],
    (err, result) => {
      if (err) {
        // Log error to understand what's going wrong
        console.error(err);
        return res.status(500).json({ error: "Failed to add customer" });
      }

      // If successful, respond with a 201 status
      res.status(201).send("Customer created");
    }
  );
};

const deletecustomers = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM nodedb WHERE id =$1 ", [id], (err, data) => {
    const nocustomer = !data.rows.length;
    if (nocustomer) {
      res.send("customer doesnot exists");
    }
    pool.query("DELETE FROM nodedb WHERE ID = $1", [id], (err, data) => {
      if (err)
        return res.status(500).json({ error: "Failed to delete customer" });
      res.status(200).send("deleted");
    });
  });
};

const updatecustomer = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  pool.query("SELECT * FROM nodedb WHERE  id = $1", [id], (err, data) => {
    const nocustomer = !data.rows.length;
    if (nocustomer) {
      res.send("no customer");
    }
    pool.query(
      "UPDATE nodedb SET  name=$1, age =$2 WHERE id =$3 ",
      [name, age, id],
      (err, data) => {
        if (err) res.send(error);
        res.send("updated");
      }
    );
  });
};
module.exports = {
  getCustomers,
  getCustomersById,
  addCustomers,
  deletecustomers,
  updatecustomer,
};
