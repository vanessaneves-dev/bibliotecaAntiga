import { IconName } from "react-icons/fa";
import logoFooter from "../../assets/images/BIBLIOTECH Logo Footer.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export function Footer () {
    return (
        <>
            <hr />
            <div className="container-fluid text-center text-md-left mt-5 mb-2">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <Link as={Link} to="/"><img src={logoFooter} alt="logo-footer" width="150" id="logo-footer"/></Link>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
                        <h5 className="text-uppercase">Informações</h5>
                        <ul className="list-unstyled">
                            <li><Link as={Link} to="/cookies">Cookies</Link></li>
                            <li><Link as={Link} to="/politicas-de-privacidade">Políticas de privacidade</Link></li>
                            <li><Link as={Link} to="/termos-e-condicoes-de-uso">Termos e condições de uso</Link></li>
                            <li><Link as={Link} to="/trabalhe-conosco">Trabalhe conosco</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
                        <h5 className="text-uppercase">Suporte</h5>
                        <ul className="list-unstyled">
                             <li><Link as={Link} to="/ajuda">Ajuda</Link></li>
                            <li><Link as={Link} to="/conta">Sua conta</Link></li>
                            <li><Link as={Link} to="/emprestimos">Seus empréstimos</Link></li>
                            <li><Link as={Link} to="/livros">Seus livros</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3" id="section-footer">
                        <h5 className="text-uppercase">Redes sociais</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="bi bi-github"></i> Github</a></li>
                            <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
                            <li><a href="#"><i className="bi bi-linkedin"></i> Linkedin</a></li>
                            <li><a href="#"><i className="bi bi-tiktok"></i> Tiktok</a></li>
                        </ul>
                    </div>
                </div>
        </div>

        <div className="footer-copyright text-center py-3">
            © 2023 Copyright: Squad #8 - Projeto Bibliotech SoulCode
        </div>

    </>
    )
}