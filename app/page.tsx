import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/packages/Packages";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section>
          <h1>SXS Events – Servicii pentru nunți și evenimente</h1>

          <p>
            SXS Events oferă servicii complete pentru nunți, botezuri,
            petreceri private și evenimente corporate. Descoperă servicii
            precum platformă 360, cabină foto, candy bar și multe alte
            experiențe pentru evenimentul tău.
          </p>
        </section>

        <Packages />

        <Services />

        <Gallery />

        <Contact />

        <section>
          <h2>Platformă 360 pentru evenimente</h2>

          <p>
            Platforma 360 este una dintre cele mai populare atracții pentru
            nunți, botezuri și petreceri. Oferă invitaților videoclipuri
            spectaculoase și o experiență memorabilă la orice eveniment.
          </p>

          <h2>Cabină foto pentru nuntă și evenimente</h2>

          <p>
            Cabina foto SXS Events este perfectă pentru nunți, botezuri,
            aniversări și petreceri corporate. Invitații pot crea amintiri
            distractive și personalizate în timpul evenimentului.
          </p>

          <h2>Candy Bar pentru nunți și petreceri</h2>

          <p>
            Organizăm candy bar-uri personalizate pentru nunți, botezuri și
            evenimente private. Putem include dulciuri, deserturi și
            aranjamente adaptate tematicii evenimentului.
          </p>

          <h2>Mini Pancakes</h2>

          <p>
            Barul de mini pancakes este o alegere perfectă pentru invitații
            care își doresc un desert delicios și spectaculos la nuntă,
            botez sau petrecere.
          </p>

          <h2>Fântână de ciocolată</h2>

          <p>
            Fântâna de ciocolată oferă un moment dulce și special pentru
            invitații de la nunți, botezuri și alte evenimente.
          </p>

          <h2>Audio Guestbook</h2>

          <p>
            Audio Guestbook permite invitaților să lase mesaje vocale pentru
            miri sau sărbătoriți, transformând urările într-o amintire
            specială de păstrat.
          </p>

          <h2>Oglindă Selfie</h2>

          <p>
            Oglinda selfie personalizată oferă o experiență foto interactivă
            și este potrivită pentru nunți, petreceri și evenimente corporate.
          </p>

          <h2>Servicii complete pentru evenimente</h2>

          <p>
            SXS Events oferă o gamă variată de servicii pentru evenimente:
            platformă 360, cabină foto, candy bar, mini pancakes, torturi
            personalizate, invitații de nuntă, mărturii, arcade de baloane,
            plicuri de dar, meniuri personalizate, audio guestbook, fântână
            de ciocolată, pahare pentru miri și nași, cutii de dar, glow
            sticks, mașină de baloane cu fum, panouri pentru aranjarea
            invitaților la mese, șevalet „Bine ați venit”, oglindă selfie,
            decor pentru camera mirilor și photo corner personalizat.
          </p>

          <h2>SXS Events</h2>

          <p>
            Dacă organizezi o nuntă, un botez, o aniversare sau orice alt
            eveniment, SXS Events îți oferă servicii și experiențe
            personalizate pentru ca evenimentul tău să fie memorabil.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
