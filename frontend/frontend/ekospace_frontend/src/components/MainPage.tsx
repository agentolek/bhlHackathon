import styled from "styled-components";
import FancyMap from "./FancyMap";
import Footer from "./Footer";
import { Link } from "react-router";
import SatelliteSelector from "./SatelliteSelector";
import { useState } from "react";
import { satellite } from "../api/getSatellites";

export default function MainPage() {
  const [satelliteSelectorVisible, setSatelliteSelectorVisible] =
    useState<boolean>(false);
  const [selectedSatellite, setSelectedSatellite] = useState<satellite>();

  return (
    <Wrapper>
      <TopPart>
        <Title>EKO Space</Title>
        <Subtitle>Kosmosu nie pomalujesz</Subtitle>
        <NavLink to={"/mission"}>Nasza misja</NavLink>
      </TopPart>
      <Heading>Wizualizacja zanieczyszczeń</Heading>
      <OrganizationDescription>
        Nasza misja to ochrona naszej planety przed skutkami zanieczyszczeń
        wynikających z dynamicznie rozwijającego się przemysłu kosmicznego. W
        EcoOrbit wierzymy, że eksploracja kosmosu nie powinna odbywać się
        kosztem środowiska naturalnego. Poniższa wizualizacja pozwoli każdemu
        zobaczyć na własne oczy jak kosmiczne odpady wpadające do atmosfery są
        zanieczyszczają.
      </OrganizationDescription>
      <SatImpactPreviewTitle>
        Oto jak satelity wpływają na atmosferę:
      </SatImpactPreviewTitle>
      <SatImpactSelectorDescription>
        Znajdź satelitę nad wybranym miastem i zobacz jak będzie wyglądać jego
        wpływ na środowisko, gdy wpadnie w atmosferę.
      </SatImpactSelectorDescription>
      <MSSelection
        onClick={() => setSatelliteSelectorVisible(!satelliteSelectorVisible)}
      >
        Wyszukaj satelitę
      </MSSelection>
      {satelliteSelectorVisible ? (
        <SatelliteSelector onSelect={setSelectedSatellite} />
      ) : (
        <></>
      )}
      <Visualizer>
        <FancyMapWrapper>
          <FancyMap height={500} width={1000} />
        </FancyMapWrapper>
        <VInfo>
          <VTitle>
            {selectedSatellite ? selectedSatellite.name : "wybierz satelitę..."}
          </VTitle>
          <VDescription>
            {selectedSatellite ? (
              <>
                Satelita {selectedSatellite.name} spalając się w atmosferze
                wygenerowała ogromne ilości tlenku aluminium który może mieć
                wpływ na jakość powietrza oraz warunki atmosferyczne. Tlenek
                aluminium jest drobnocząsteczkowym pyłem, który może osiadać w
                atmosferze, potencjalnie wpływając na jej właściwości optyczne,
                takie jak zdolność odbijania promieni słonecznych. Ponadto jego
                obecność w wyższych warstwach atmosfery może oddziaływać na
                procesy chemiczne, w tym reakcje związane z ozonem. Naukowcy
                wciąż badają, jakie są długoterminowe skutki takich zdarzeń na
                środowisko i klimat.
              </>
            ) : (
              <></>
            )}
          </VDescription>
        </VInfo>
      </Visualizer>
      <Spacer />
      <Footer />
    </Wrapper>
  );
}

const NavLink = styled(Link)`
  font-size: 1.2em;
`;

const SatImpactSelectorDescription = styled.div`
  font-size: 120%;
  width: 60vw;
  margin: 30px auto;
`;

const SatImpactPreviewTitle = styled.h1`
  font-size: 2.5em;
  margin-top: 80px;
`;

const OrganizationDescription = styled.p`
  font-size: 120%;
  width: 60vw;
  margin: 10px auto;
`;
const Spacer = styled.div`
  height: 50px;
`;

const FancyMapWrapper = styled.div`
  margin: 30px auto 0px auto;
`;

const Wrapper = styled.div`
  width: 100vw;
`;

const Heading = styled.h1`
  margin: 30px 0px;
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

const Subtitle = styled.h2``;

const MSSelection = styled.button`
  margin: 0px 10px;
`;

const Visualizer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const VInfo = styled.div`
  display: flex;
  flex-direction: column;
  justtify-content: center;
  align-items: center;
  width: 60vw;
  margin: auto;
`;

const VTitle = styled.h1`
  font-size: 2em;
`;

const VDescription = styled.p``;
