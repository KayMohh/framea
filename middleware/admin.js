module.exports = function (req, res, next) {
  // 401 hint -  Unauthorized
  // 403 to deny access entirely - Forbidden

  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  next();
};
