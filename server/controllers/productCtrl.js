const create = (req, res, next) => {
  const { name, description, price, image_url } = req.body;
  req.app
    .get("db")
    .create_product([name, description, price, image_url])
    .then(response => {
      res.status(200).send(`Successfully added ${name}`);
    })
    .catch(e => res.status(500).send(e));
};

const getOne = (req, res, next) => {
  req.app
    .get("db")
    .read_product(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

const getAll = (req, res, next) => {
  req.app
    .get("db")
    .read_products()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send("Something broke.");
      console.log(err);
    });
};

const update = (req, res, next) => {
  req.app
    .get("db")
    .update_product(req.params.id, req.query.desc)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send("Something broke");
      console.log(err);
    });
};
const deleted = (req, res, next) => {
  req.app
    .get("db")
    .delete_product(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send("Something broke.");
      console.log(err);
    });
};
module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleted
};
