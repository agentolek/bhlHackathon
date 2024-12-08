import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router";

export default function MissionPage() {
  return (
    <Wrapper>
      <TopPart>
        <Title>EKO Space</Title>
        <Subtitle>Kosmosu nie pomalujesz</Subtitle>
        <NavLink to={"/"}>Wizualizacja zanieczyszczeń</NavLink>
      </TopPart>
      <Heading>Nasza misja</Heading>
      <Paragraph>
        Eksploracja kosmosu, choć fascynująca i niosąca za sobą ogromny
        potencjał rozwoju technologicznego, wiąże się również z licznymi
        wyzwaniami środowiskowymi. Fundacja EKO Space zwraca uwagę na kluczowe
        aspekty wpływu przemysłu kosmicznego na naszą planetę oraz przestrzeń
        kosmiczną, aby promować zrównoważone podejście do eksploracji
        Wszechświata.
      </Paragraph>
      <Subheading>Przemysł kosmiczny + technologia</Subheading>
      <Paragraph>
        Liczba lotów w kosmos zwiększyła się na tyle, że spodziewamy się lotów w
        kosmos dostępnych dla przeciętnych ludzi w przeciągu następnej dekady.
        Kolejnym chwytliwym tematem współczesnego świata jest ekologia. W
        obecnych czasach staramy się by wszystkie nasze działania nie miały
        negatywnych efektów na naszej planecie. Zadaliśmy obie więc pytanie
        gdzie jest ekologia w przemyśle kosmicznym? Mimo, że parę lat temu nie
        był to duży problem w związku z małą eksploatacją rejsów kosmicznych,
        nadszedł najwyższy czas by się tym zająć.
      </Paragraph>
      <Subheading>Co dzieje się z satelitami na końcu ich życia?</Subheading>
      <Paragraph>
        Podczas ponownego wejścia w atmosferę satelity, które kończą swoje
        misje, zazwyczaj ulegają spaleniu w wyniku tarcia z gęstniejącymi
        warstwami powietrza. Proces ten prowadzi do powstawania produktów
        ubocznych, z których jednym z najbardziej problematycznych są tlenki
        aluminium. Te cząstki, emitowane na dużych wysokościach, mają potencjał
        do oddziaływania z naturalnymi procesami chemicznymi w atmosferze.
        Tlenki aluminium są znanymi katalizatorami aktywacji chloru, co oznacza,
        że mogą przyczyniać się do uwalniania reaktywnego chloru z bezpiecznych
        związków chemicznych. Chlor w takiej formie jest głównym sprawcą
        niszczenia warstwy ozonowej, ponieważ wchodzi w reakcję z cząsteczkami
        ozonu, prowadząc do ich rozkładu. Zniszczenie nawet niewielkiej ilości
        ozonu w stratosferze może mieć długotrwałe skutki, ponieważ warstwa
        ozonowa pełni kluczową rolę w ochronie życia na Ziemi przed szkodliwym
        promieniowaniem ultrafioletowym. Problem ten staje się szczególnie
        istotny w kontekście rosnącej liczby satelitów, które są umieszczane na
        orbitach. W związku z tym każda kolejna dekada może zwiększać wkład tego
        zjawiska w degradację ozonu, jeśli nie zostaną opracowane skuteczne
        rozwiązania minimalizujące emisję szkodliwych produktów spalania.
      </Paragraph>
      <Subheading>Dziura ozonowa</Subheading>
      <ParagraphImageHolder>
        <Image height={250} src={"ozone_hole.png"} />
        <ImageParagraph>
          Już raz historii poważnie uszkodziliśmy naszą warstwę ozonową, na
          skutek produkowania na skalę przemysłową związków freonów i halonów.
          Jest to więc szczególnie ważne by monitorować ozon w naszej
          atmosferze.
        </ImageParagraph>
      </ParagraphImageHolder>
      <Spacer />
      <Footer />
    </Wrapper>
  );
}

const NavLink = styled(Link)`
  font-size: 1.2em;
`;

const Subheading = styled.h2``;

const Spacer = styled.div`
  height: 50px;
`;

const ParagraphImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin: 0 50px;
`;

const Paragraph = styled.p`
  width: 800px;
  font-size: 120%;
  margin: 10px auto 50px auto;
`;

const ImageParagraph = styled.p`
  width: 400px;
  font-size: 120%;
  margin: 0px;
`;

const Wrapper = styled.div`
  width: 100vw;
`;

const TopPart = styled.div`
  height: 400px;
  background-color: rgb(8, 42, 55);
  background-image: url("starry_background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 68%,
    83% 78%,
    68% 82%,
    50% 76%,
    35% 80%,
    20% 77%,
    4% 73%,
    0% 66%
  );
`;

const Title = styled.h1`
  margin: 0px;
  padding-top: 100px;
`;

const Heading = styled.h1`
  margin: 0px;
`;

const Subtitle = styled.h2``;
