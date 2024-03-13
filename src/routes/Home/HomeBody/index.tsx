import { Link } from "react-router-dom";
import HomePage from "../../../components/HomePage";
import Button from "../../../components/Button";

export default function HomeBody() {

    return (
        <section id="section-home-page">
            <main>
                <HomePage name_promotion="Página inicial" />
            </main>
            <div>
                <Link to="/promotion">
                    <Button name_button="Ver promoção" />
                </Link>
            </div>
        </section>
    );
}