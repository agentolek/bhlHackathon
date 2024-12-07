import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Form>
        <FormTitle>Skontaktuj się z nami</FormTitle>
        <EnterEmail placeholder={"e-mail"}></EnterEmail>
        <EnterMessage
          rows={8}
          cols={60}
          placeholder={"wiadomość"}
        ></EnterMessage>
      </Form>
      <DescriptionSection>
        <OrgName>EKO Space</OrgName>
        <Description>
          EKO Space to międzynarodowa organizacja non-profit, której celem jest
          zwiększanie świadomości na temat wpływu przemysłu kosmicznego na
          środowisko naturalne. Zajmujemy się badaniem i monitorowaniem
          zanieczyszczeń wynikających z deorbitacji satelitów oraz innych
          operacji kosmicznych, takich jak starty rakiet czy produkcja sprzętu
          orbitalnego.
        </Description>
      </DescriptionSection>
    </Wrapper>
  );
}

const FormTitle = styled.h3``;
const Wrapper = styled.div`
  padding: 40px;
  background-color: #04181f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const EnterEmail = styled.input`
  margin-bottom: 5px;
`;
const EnterMessage = styled.textarea``;
const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;
const OrgName = styled.h3``;
const Description = styled.p``;
