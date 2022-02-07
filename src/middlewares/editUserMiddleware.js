function editUserMiddleware(req, res, next) {
  const { id } = req.params;
  const user = req.session.userLogged;
  if (Number(id) !== user.id) {
    res.redirect("/");
  }

  next();
}

module.exports = editUserMiddleware;
