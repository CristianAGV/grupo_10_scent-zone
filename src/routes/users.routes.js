const express = require("express");
const router = express.Router();
const path = require("path");
const { usersController } = require("../controllers/index");
const { body } = require("express-validator");
const multer = require("multer");
const clientMiddleware = require("../middlewares/clientMiddleware");
const visitorsMiddleware = require("../middlewares/visitorsMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");
const userEditMiddleware = require("../middlewares/editUserMiddleware");
const editUserMiddleware = require("../middlewares/editUserMiddleware");
let userValidations = [
  body("email").notEmpty().withMessage("Debes ingresar un email"),
  body("email").isEmail(),
  body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
];

let registerValidations = [
  body("email").notEmpty().withMessage("Debes ingresar un email"),
  body("email").isEmail().withMessage("El email debe tener un formato similar a 'email@email.com'"),
  body("password").notEmpty().withMessage("Debes ingresar una contraseña").isLength({ min: 8 }).withMessage('La contraseña debe tener más de 8 caracteres'),
  body("first_name").notEmpty().withMessage("Debes ingresar tu nombre").isLength({ min: 2, max:15 }).withMessage("El nombre debe tener más de dos caracteres"),
  body("last_name").notEmpty().withMessage("Debes ingresar tu nombre").isLength({ min: 2, max:15 }).withMessage("El apellido debe tener más de dos caracteres"),
  body("country").notEmpty().withMessage("Debes ingresar tu país"),
  body("productImage").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".png", ".jpg"];
    if (!file) {
      throw new Error("Debes subir una imagen de perfil");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Solo se aceptan formatos de imagen ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    console.log(req.file);
    let imgFolder = path.resolve(__dirname, "../../public/assets/users");
    cb(null, imgFolder);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });

router.get("/login", clientMiddleware, usersController.login);
router.get("/historial", usersController.historial);
router.get("/registro", clientMiddleware, usersController.registro);
router.get("/logout", usersController.logOut);
router.get(
  "/detail/:id",
  visitorsMiddleware,
  editUserMiddleware,
  usersController.detalle
);
router.get(
  "/list",
  visitorsMiddleware,
  isAdminMiddleware,
  usersController.listarTodos
);
router.get("/delete/:id", visitorsMiddleware, usersController.deleteView);

router.delete("/:id/delete", visitorsMiddleware, usersController.deleteUser);
router.post("/authLogin", userValidations, usersController.processLogin);
router.post(
  "/registro",
  upload.single("image"),
  registerValidations,
  usersController.createUser
);

router.get(
  "/edit/:id",
  visitorsMiddleware,
  editUserMiddleware,
  usersController.actualizar
);

// router.get("/edit/:id", usersController.actualizar)
router.post(
  "/edit/:id",
  upload.single("image"),
  registerValidations,
  usersController.actualizarUsuario
);

module.exports = router;
