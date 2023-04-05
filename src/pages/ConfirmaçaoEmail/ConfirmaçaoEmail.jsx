import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { logout } from "../../firebase/auth";

export function ConfirmaçaoEmail() {
  useEffect(() => {
    sendEmailVerification(auth.currentUser).then(() => {
      toast.success(`Confirme o e-mail para finalizar o cadastro`, {
        position: "bottom-right",
        duration: 2500,
      });
      logout();
    });
  }, []);

  return (
    <div>
      {" "}
      <Link to="/login">Já verificou seu email</Link>
      <h1>Confirme seu e-mail</h1>
      <p>
        Enviamos um e-mail para confirmação de usuário, verifique ele para
        finalizar o seu login em nosso site!
      </p>
      <p>Caso não tenha encontrado o e-mail, verifique a caixa de span</p>
    </div>
  );
}
