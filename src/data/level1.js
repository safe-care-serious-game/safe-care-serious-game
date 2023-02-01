import LevelSequence1Shot1Mp4 from "../videos/level1/LevelSequence1Shot1.mp4";
import LevelSequence1Shot1WebM from "../videos/level1/LevelSequence1Shot1.webm";
import LevelSequence1Shot1Ogv from "../videos/level1/LevelSequence1Shot1.ogv";
import LevelSequence1Shot2Mp4 from "../videos/level1/LevelSequence1Shot2.mp4";
import LevelSequence1Shot2WebM from "../videos/level1/LevelSequence1Shot2.webm";
import LevelSequence1Shot2Ogv from "../videos/level1/LevelSequence1Shot2.ogv";
import LevelSequence1Shot3Mp4 from "../videos/level1/LevelSequence1Shot3.mp4";
import LevelSequence1Shot3WebM from "../videos/level1/LevelSequence1Shot3.webm";
import LevelSequence1Shot3Ogv from "../videos/level1/LevelSequence1Shot3.ogv";
import LevelSequence1Shot4Mp4 from "../videos/level1/LevelSequence1Shot4.mp4";
import LevelSequence1Shot4WebM from "../videos/level1/LevelSequence1Shot4.webm";
import LevelSequence1Shot4Ogv from "../videos/level1/LevelSequence1Shot4.ogv";
import LevelSequence1Shot5Mp4 from "../videos/level1/LevelSequence1Shot5.mp4";
import LevelSequence1Shot5WebM from "../videos/level1/LevelSequence1Shot5.webm";
import LevelSequence1Shot5Ogv from "../videos/level1/LevelSequence1Shot5.ogv";
import LevelSequence1Shot6Mp4 from "../videos/level1/LevelSequence1Shot6.mp4";
import LevelSequence1Shot6WebM from "../videos/level1/LevelSequence1Shot6.webm";
import LevelSequence1Shot6Ogv from "../videos/level1/LevelSequence1Shot6.ogv";
import LevelSequence1Shot7Mp4 from "../videos/level1/LevelSequence1Shot7.mp4";
import LevelSequence1Shot7WebM from "../videos/level1/LevelSequence1Shot7.webm";
import LevelSequence1Shot7Ogv from "../videos/level1/LevelSequence1Shot7.ogv";
import LevelSequence1Shot8Mp4 from "../videos/level1/LevelSequence1Shot8.mp4";
import LevelSequence1Shot8WebM from "../videos/level1/LevelSequence1Shot8.webm";
import LevelSequence1Shot8Ogv from "../videos/level1/LevelSequence1Shot8.ogv";
import LevelSequence1Shot9Mp4 from "../videos/level1/LevelSequence1Shot9.mp4";
import LevelSequence1Shot9WebM from "../videos/level1/LevelSequence1Shot9.webm";
import LevelSequence1Shot9Ogv from "../videos/level1/LevelSequence1Shot9.ogv";
import LevelSequence1Shot10Mp4 from "../videos/level1/LevelSequence1Shot10.mp4";
import LevelSequence1Shot10WebM from "../videos/level1/LevelSequence1Shot10.webm";
import LevelSequence1Shot10Ogv from "../videos/level1/LevelSequence1Shot10.ogv";
import LevelSequence1Shot11Mp4 from "../videos/level1/LevelSequence1Shot11.mp4";
import LevelSequence1Shot11WebM from "../videos/level1/LevelSequence1Shot11.webm";
import LevelSequence1Shot11Ogv from "../videos/level1/LevelSequence1Shot11.ogv";
import LevelSequence1Shot12Mp4 from "../videos/level1/LevelSequence1Shot12.mp4";
import LevelSequence1Shot12WebM from "../videos/level1/LevelSequence1Shot12.webm";
import LevelSequence1Shot12Ogv from "../videos/level1/LevelSequence1Shot12.ogv";
import LevelSequence1Shot13Mp4 from "../videos/level1/LevelSequence1Shot13.mp4";
import LevelSequence1Shot13WebM from "../videos/level1/LevelSequence1Shot13.webm";
import LevelSequence1Shot13Ogv from "../videos/level1/LevelSequence1Shot13.ogv";
import LevelSequence1Shot15Mp4 from "../videos/level1/LevelSequence1Shot15.mp4";
import LevelSequence1Shot15WebM from "../videos/level1/LevelSequence1Shot15.webm";
import LevelSequence1Shot15Ogv from "../videos/level1/LevelSequence1Shot15.ogv";
import LevelSequence1Shot16Mp4 from "../videos/level1/LevelSequence1Shot16.mp4";
import LevelSequence1Shot16WebM from "../videos/level1/LevelSequence1Shot16.webm";
import LevelSequence1Shot16Ogv from "../videos/level1/LevelSequence1Shot16.ogv";
import LevelSequence1Shot17Mp4 from "../videos/level1/LevelSequence1Shot17.mp4";
import LevelSequence1Shot17WebM from "../videos/level1/LevelSequence1Shot17.webm";
import LevelSequence1Shot17Ogv from "../videos/level1/LevelSequence1Shot17.ogv";
import LevelSequence1Shot18Mp4 from "../videos/level1/LevelSequence1Shot18.mp4";
import LevelSequence1Shot18WebM from "../videos/level1/LevelSequence1Shot18.webm";
import LevelSequence1Shot18Ogv from "../videos/level1/LevelSequence1Shot18.ogv";

const data = [
  {
    characterName: "Recepcionista",
    dialogue:
      "Bom dia, gostaria de solicitar a internação do paciente Oswaldo Cruz no setor. O setor possui vagas?",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot1Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot1WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot1Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue: "Bom dia, temos leitos disponíveis.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot4Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot4WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot4Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot4Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot4WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot4Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Por favor, pode encaminhá-lo para internação com o enfermeiro e o prontuário.",
        score: 0,
        correct: false,
      },
      {
        dialogue:
          "Por favor, pode encaminhá-lo para internação com o enfermeiro, o prontuário, documentos de identificação com foto e pulseira de identificação do paciente. O paciente necessita de algum cuidado especial? Está acompanhado por alguém?",
        score: 10,
        correct: true,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Por favor, pode encaminhá-lo para internação com o enfermeiro, o prontuário, documentos de identificação com foto e pulseira de identificação do paciente. O paciente necessita de algum cuidado especial? Está acompanhado por alguém?",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot2Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot2WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot2Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Recepcionista",
    dialogue:
      "Estou encaminhando o paciente Oswaldo Cruz, proveniente de sua residência. Acompanhado de sua esposa. Possui 63 anos. Está em uso de máscara de Venturi à 24%. O enfermeiro acompanhará o paciente em cadeira de rodas ao setor. Obrigada.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot3Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot3WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot3Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue: "Entendido. Estamos aguardando. Obrigada.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot4Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot4WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot4Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot5Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot5WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot5Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Enfermeiro Marcos Valadão",
    dialogue:
      "Bom dia Enfermeira Florence, trouxe o senhor Oswaldo para internação no setor. Aqui está o seu prontuário.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot6Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot6WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot6Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    dialogue:
      "Selecione os principais identificadores que são utilizados nos prontuários.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot17Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot17WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot17Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot17Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot17WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot17Ogv,
        type: "video/ogg",
      },
    ],
    multipleOptions: [
      {
        text: "Nome completo",
        score: 10,
        correct: true,
      },
      {
        text: "Data de nascimento",
        score: 10,
        correct: true,
      },
      {
        text: "Idade",
        score: 10,
        correct: false,
      },
      {
        text: "Raça",
        score: 10,
        correct: false,
      },
      {
        text: "Número de registro",
        score: 10,
        correct: true,
      },
      {
        text: "Nome social",
        score: 10,
        correct: true,
      },
      {
        text: "Endereço",
        score: 10,
        correct: false,
      },
      {
        text: "Nome da mãe",
        score: 10,
        correct: true,
      },
      {
        text: "Exames",
        score: 10,
        correct: false,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Obrigada. Olá senhor Oswaldo, sou a enfermeira responsável por esse setor, me chamo Florence.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot9Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot9Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Perguntar ao paciente seu nome completo e data de nascimento, para confirmar sua identificação com os dados da pulseira de identificação.",
        score: 10,
        correct: true,
      },
      {
        dialogue:
          "Acompanhar o paciente ao leito e iniciar os cuidados de enfermagem.",
        score: 0,
        correct: false,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue: "O senhor sabe me informar se possui alguma alergia?",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot7Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot7WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot7Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Oswaldo Cruz",
    dialogue: "Sim, tenho alergia a dipirona.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot8Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot8WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot8Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot8Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot8WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot8Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Registrar no prontuário do paciente e acompanhá-lo ao leito.",
        score: 0,
        correct: false,
      },
      {
        dialogue:
          "Identificar o paciente com seu prontuário, ressaltar a presença de alergia nas folhas do prontuário, na pulseira e na placa de identificação e acompanhá-lo até o leito.",
        score: 10,
        correct: true,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Obrigada por responder a todas as perguntas, vamos ao seu leito, o senhor será acomodado no 303C.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot9Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot18Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot18WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot18Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot18Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot18WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot18Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue: "Iniciar os cuidados de admissão e de enfermagem.",
        score: 0,
        correct: false,
      },
      {
        dialogue:
          "Orientar quanto à necessidade do uso da pulseira de identificação.",
        score: 10,
        correct: true,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Essa pulseira branca é sua pulseira de identificação e vou colocá-la no seu punho esquerdo. O senhor não deve tirá-la nem trocá-la com ninguém, pois ela irá identificá-lo e evitar que ocorram confusões enquanto estiver internado.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot10Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot10WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot10Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot11Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot11WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot11Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Acompanhante do paciente",
    dialogue:
      "Enfermeira, como ele vai fazer para tomar banho com essa pulseira? Não poderá molhar o braço?",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot12Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot12WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot12Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Ele poderá tomar banho normalmente, pois essa pulseira é resistente à água. A pulseira já foi feita com esse material para que o paciente não precise tirá-la e acabe perdendo. Certo? Possui mais alguma dúvida?",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot10Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot10WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot10Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Acompanhante",
    dialogue: "Certo, entendemos, obrigada enfermeira.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot12Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot12WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot12Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot12Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot12WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot12Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Colocar placa de identificação do paciente no leito e explicar sua importância.",
        score: 10,
        correct: true,
      },
      {
        dialogue: "Iniciar os cuidados de enfermagem.",
        score: 0,
        correct: false,
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Senhor Oswaldo, além dessa pulseira para identificarmos o senhor, colocamos essa placa que é outra forma de verificar sua identidade enquanto estiver hospitalizado. Também não deve ser tirada daqui, nem trocada.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot15Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot15WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot15Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    dialogue:
      "Selecione os principais identificadores que são utilizados nas placas de identificação.",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot16Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot16WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot16Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot16Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot16WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot16Ogv,
        type: "video/ogg",
      },
    ],
    multipleOptions: [
      {
        text: "Nome completo",
        score: 10,
        correct: true,
      },
      {
        text: "Data de nascimento",
        score: 10,
        correct: true,
      },
      {
        text: "Idade",
        score: 10,
        correct: false,
      },
      {
        text: "Raça",
        score: 10,
        correct: false,
      },
      {
        text: "Número de registro",
        score: 10,
        correct: true,
      },
      {
        text: "Nome social",
        score: 10,
        correct: true,
      },
      {
        text: "Endereço",
        score: 10,
        correct: false,
      },
      {
        text: "Nome da mãe",
        score: 10,
        correct: true,
      },
      {
        text: "Exames",
        score: 10,
        correct: false,
      },
    ],
  },
  {
    characterName: "Oswaldo",
    dialogue: "Ok, enfermeira. Obrigado!",
    shots: [
      {
        id: 1,
        src: LevelSequence1Shot13Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence1Shot13WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence1Shot13Ogv,
        type: "video/ogg",
      },
    ],
  },
];

export default data;
