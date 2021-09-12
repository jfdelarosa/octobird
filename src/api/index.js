const { Router } = require("express");
const createImage = require("../utils/canvas");
const getChart = require("../utils/github");

const router = Router();

const routes = () => {
  router.get("/contributions/:user", async (req, res) => {
    try {
      const { user } = req.params;

      if (!user) {
        throw new Error("User is required");
      }

      const { data } = await getChart(user);

      res.json(data);
    } catch ({ message }) {
      res.json({ message });
    }
  });

  router.get("/cover/:user", async (req, res) => {
    try {
      const { user } = req.params;

      if (!user) {
        throw new Error("User is required");
      }

      const { data } = await getChart(user);
      const image = createImage(user, data);
      res.type("png").send(image);
    } catch ({ message }) {
      res.json({ message });
    }
  });

  router.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  return router;
};

module.exports = routes;
