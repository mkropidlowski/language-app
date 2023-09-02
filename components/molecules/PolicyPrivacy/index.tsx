import style from "./policy.module.scss";

const PolicyPrivacy = () => (
    <div className={style.wrapper}>
        <h1>Polityka prywatności</h1>
        <p>
            Ostatnia aktualizacja: <b>01.09.2023</b>
        </p>

        <h2>1. Zbierane dane</h2>
        <p>Podczas korzystania z naszej strony portfolio możemy zbierać następujące rodzaje informacji:</p>
        <ul>
            <li>
                <p>a. Dane osobowe</p>
                <ul>
                    <li>Imię i nazwisko</li>
                    <li>Adres e-mail</li>
                    <li>Numer telefonu (opcjonalny)</li>
                    <li>Inne informacje, które dobrowolnie nam przekazujesz w treści wiadomości</li>
                </ul>
            </li>
            <li>
                <p>b. Dane techniczne</p>
                <ul>
                    <li>Adres IP</li>
                    <li>Dane o przeglądarce internetowej</li>
                    <li>Data i godzina odwiedzin</li>
                    <li>Informacje o Twoim urządzeniu</li>
                </ul>
            </li>
        </ul>

        <h2>2. Cel zbierania danych</h2>
        <p>
            Głównym celem zbierania Twoich danych osobowych jest umożliwienie nam udzielenia odpowiedzi na Twoje pytania
            i komunikację z Tobą w odpowiedzi na Twoje zgłoszenie za pomocą formularza kontaktowego.
        </p>

        <h2>3. Używanie danych</h2>
        <p>Twoje dane osobowe mogą być wykorzystywane w następujący sposób:</p>
        <ul>
            <li>Do odpowiedzi na Twoje pytania i zgłoszenia.</li>
            <li>Do analizy ruchu na naszej stronie w celu poprawy jej funkcjonalności.</li>
            <li>
                Do ewentualnego kontaktu w celu przesyłania informacji o aktualizacjach lub promocjach (jeśli wyrazisz
                na to zgodę).
            </li>
        </ul>

        <h2>4. Udostępnianie danych</h2>
        <p>
            Twoje dane osobowe nie są sprzedawane, wynajmowane ani udostępniane osobom trzecim bez Twojej zgody, chyba
            że jest to wymagane przez prawo lub w celu zapewnienia naszej obsługi technicznej.
        </p>

        <h2>5. Bezpieczeństwo danych</h2>
        <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych przed utratą,
            nieautoryzowanym dostępem lub innymi zagrożeniami.
        </p>

        <h2>6. Ciasteczka (Cookies)</h2>
        <p>
            Nasza strona może korzystać z plików cookie w celu śledzenia ruchu na stronie i analizy zachowań
            użytkowników. Możesz zarządzać ustawieniami plików cookie w swojej przeglądarce.
        </p>

        <h2>7. Twoje prawa</h2>
        <p>
            Masz prawo do dostępu, poprawiania, usuwania lub ograniczenia przetwarzania swoich danych osobowych. Możesz
            również wycofać zgodę na przetwarzanie danych w dowolnym momencie.
        </p>

        <h2>8. Kontakt</h2>
        <p>
            Jeśli masz pytania dotyczące naszej polityki prywatności lub przetwarzania swoich danych osobowych,
            skontaktuj się z nami pod adresem e-mail: <b>mkropidlowsky@gmail.com</b>
        </p>

        <h2>9. Zmiany w polityce prywatności</h2>
        <p>
            Ta polityka prywatności może być okresowo aktualizowana, dlatego zachęcamy do regularnego sprawdzania jej
            treści. Wszelkie zmiany będą publikowane na tej stronie.
        </p>
    </div>
);

export default PolicyPrivacy;
