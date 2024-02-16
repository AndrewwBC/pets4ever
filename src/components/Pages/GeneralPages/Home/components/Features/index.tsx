import { Container, Content, Infos, Text } from "./styles";

import vetIcon from "../../../../../assets/images/icons/veterinario.svg";
import toyIcon from "../../../../../assets/images/icons/brinquedo.svg";
import likeIcon from "../../../../../assets/images/icons/gostar.svg";

export default function () {
  const iconsContent = [
    {
      title: "Veterinários.",
      text: "Encontre veterinários capacitados para tratar o seu animal de estimação da melhor maneira possível.",
      icon: vetIcon,
    },
    {
      title: "Cuidadores.",
      text: "Cuidadores dispostos a dar todo amor e carinho ao seu animal de estimação, em casa ou ao livre.",
      icon: toyIcon,
    },
    {
      title: "Interações.",
      text: "Compartilhe momentos únicos do seu animal de estimação e faça novas amizades.",
      icon: likeIcon,
    },
  ];

  return (
    <Container>
      <Content>
        <Text>
          <h1>Conheça a rede.</h1>

          <p>
            A nossa intenção é proporcionar diversão e cuidados para o seu
            melhor amigo.
          </p>
        </Text>

        <Infos>
          {iconsContent.map((item) => (
            <div key={item.title} className="infoContent">
              <h1>{item.title}</h1>

              <div className="iconContainer">
                <img
                  height={100}
                  width={100}
                  src={item.icon}
                  alt={item.title}
                />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Infos>
      </Content>
    </Container>
  );
}
