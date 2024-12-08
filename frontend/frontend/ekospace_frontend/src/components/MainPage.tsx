import styled from "styled-components";
import FancyMap from "./FancyMap";
import Footer from "./Footer";
import { Link } from "react-router";

export default function MainPage() {
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
        Wybierz satelitę, aby zobaczyć jak wygląda jej wpływ na naszą atmosferę.
      </SatImpactSelectorDescription>
      <MapSwitcher>
        <MSSelection>SAT1-2137</MSSelection>
        <MSSelection>MEGUSMaximus Alpha</MSSelection>
        <MSSelection>ISS</MSSelection>
      </MapSwitcher>
      <Visualizer>
        <FancyMapWrapper>
          <FancyMap height={500} width={1000} />
        </FancyMapWrapper>
        <VInfo>
          <VTitle>SAT1-2137</VTitle>
          <VDescription>
            SAT1-2137 była fikcyjnym satelitą komunikacyjnym wystrzelonym na
            orbitę w ramach międzynarodowego programu badawczego w 2017 roku.
            Zaprojektowana z myślą o przesyłaniu danych w trudnych warunkach
            pogodowych, obsługiwała regiony o ograniczonej infrastrukturze
            telekomunikacyjnej, zapewniając dostęp do internetu i usług
            transmisji danych w miejscach niedostępnych dla tradycyjnych sieci.
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

const MapSwitcher = styled.div`
  display: flex;
  justify-content: center;
`;

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
