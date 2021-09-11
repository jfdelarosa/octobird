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

  router.get("/cover/:user", (req, res) => {
    try {
      const { user } = req.params;

      if (!user) {
        throw new Error("User is required");
      }

      const image = createImage(user);
      res.type("png").send(image);
    } catch ({ message }) {
      res.json({ message });
    }
  });

  router.get("/health", (req, res) => {
    res.status(200).json({ hola: "mundo" });
  });

  return router;
};

module.exports = routes;
