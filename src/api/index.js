const { Router } = require("express");
const createImage = require("../utils/canvas");

const router = Router();

const routes = () => {
  router.get("/cover", (req, res) => {
    try {
      const { user } = req.query;

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
