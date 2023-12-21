import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.json({
      error: "Falta cabecera y token",
    });
  }

  let token = "";
  let authToken = req.headers["authorization"];
  if (authToken.includes("Bearer")) {
    token = req.headers["authorization"].split(" ")[1];
  } else {
    return res.json({ error: "Token inválido" });
  }

  try {
    req.user = jwt.verify(token, process.env);
    next();
  } catch (error) {
    return res.json({ error: "Token inválido" });
  }
};
