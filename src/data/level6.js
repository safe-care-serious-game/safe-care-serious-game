import LevelSequence6Shot1Mp4 from "../videos/level6/LevelSequence6Shot1.mp4";
import LevelSequence6Shot1WebM from "../videos/level6/LevelSequence6Shot1.webm";
import LevelSequence6Shot1Ogv from "../videos/level6/LevelSequence6Shot1.ogv";
import LevelSequence6Shot2Mp4 from "../videos/level6/LevelSequence6Shot2.mp4";
import LevelSequence6Shot2WebM from "../videos/level6/LevelSequence6Shot2.webm";
import LevelSequence6Shot2Ogv from "../videos/level6/LevelSequence6Shot2.ogv";
import LevelSequence6Shot3Mp4 from "../videos/level6/LevelSequence6Shot3.mp4";
import LevelSequence6Shot3WebM from "../videos/level6/LevelSequence6Shot3.webm";
import LevelSequence6Shot3Ogv from "../videos/level6/LevelSequence6Shot3.ogv";
import LevelSequence6Shot4Mp4 from "../videos/level6/LevelSequence6Shot4.mp4";
import LevelSequence6Shot4WebM from "../videos/level6/LevelSequence6Shot4.webm";
import LevelSequence6Shot4Ogv from "../videos/level6/LevelSequence6Shot4.ogv";
import LevelSequence6Shot5Mp4 from "../videos/level6/LevelSequence6Shot5.mp4";
import LevelSequence6Shot5WebM from "../videos/level6/LevelSequence6Shot5.webm";
import LevelSequence6Shot5Ogv from "../videos/level6/LevelSequence6Shot5.ogv";
import LevelSequence6Shot6Mp4 from "../videos/level6/LevelSequence6Shot6.mp4";
import LevelSequence6Shot6WebM from "../videos/level6/LevelSequence6Shot6.webm";
import LevelSequence6Shot6Ogv from "../videos/level6/LevelSequence6Shot6.ogv";
import LevelSequence6Shot7Mp4 from "../videos/level6/LevelSequence6Shot7.mp4";
import LevelSequence6Shot7WebM from "../videos/level6/LevelSequence6Shot7.webm";
import LevelSequence6Shot7Ogv from "../videos/level6/LevelSequence6Shot7.ogv";
import LevelSequence6Shot8Mp4 from "../videos/level6/LevelSequence6Shot8.mp4";
import LevelSequence6Shot8WebM from "../videos/level6/LevelSequence6Shot8.webm";
import LevelSequence6Shot8Ogv from "../videos/level6/LevelSequence6Shot8.ogv";
import LevelSequence6Shot8_1Mp4 from "../videos/level6/LevelSequence6Shot8_1.mp4";
import LevelSequence6Shot8_1WebM from "../videos/level6/LevelSequence6Shot8_1.webm";
import LevelSequence6Shot8_1Ogv from "../videos/level6/LevelSequence6Shot8_1.ogv";
import LevelSequence6Shot9Mp4 from "../videos/level6/LevelSequence6Shot9.mp4";
import LevelSequence6Shot9WebM from "../videos/level6/LevelSequence6Shot9.webm";
import LevelSequence6Shot9Ogv from "../videos/level6/LevelSequence6Shot9.ogv";
import LevelSequence6Shot10Mp4 from "../videos/level6/LevelSequence6Shot10.mp4";
import LevelSequence6Shot10WebM from "../videos/level6/LevelSequence6Shot10.webm";
import LevelSequence6Shot10Ogv from "../videos/level6/LevelSequence6Shot10.ogv";
import LevelSequence6Shot11Mp4 from "../videos/level6/LevelSequence6Shot11.mp4";
import LevelSequence6Shot11WebM from "../videos/level6/LevelSequence6Shot11.webm";
import LevelSequence6Shot11Ogv from "../videos/level6/LevelSequence6Shot11.ogv";

const data = [
  {
    transitionText:
      "A enfermeira Florence irá realizar sua visita de rotina e exame físico ao paciente Oswaldo Cruz do leito 101C. Determine os cuidados que a enfermeira deverá realizar antes do procedimento.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot1Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot1WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot1Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot1Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot1WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot1Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Ir imediatamente ao quarto do paciente para evitar o desperdício de tempo e utilizar o material de bolso.",
        score: 0,
        correct: false,
      },
      {
        dialogue:
          "Dirigir-se ao posto de enfermagem, higienizar as mãos, revisar e higienizar o material de bolso a ser utilizado.",
        score: 10,
        correct: true,
      },
    ],
    helperText:
      "Que pena! De acordo com o protocolo de hieginização das mãos do Ministério da Saúde, antes de tocar no paciente você deve higienizar as mãos.",
  },
  {
    characterName: "Enfermeira Florence Nightingale",
    dialogue: "Bom dia seu Oswaldo, vim examiná-lo. Como passou a noite?",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot2Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot2WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot2Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Oswaldo Cruz",
    dialogue:
      "Enfermeira, dormi muito bem, só acordei uma vez para ir ao banheiro urinar.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot3Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot3WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot3Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Que bom que o senhor está conseguindo dormir bem. Agora vou avaliá-lo, só um minuto e conversamos.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot2Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot2WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot2Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    transitionText: "Enfermeira avalia o paciente.",
  },
  {
    characterName: "Florence",
    dialogue:
      "Senhor Oswaldo, tudo certo com o senhor. Às 10 horas vem sua medicação, se precisar de algo só chamar.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot4Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot4WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot4Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "José Pestana",
    dialogue:
      "Enfermeira, a senhora também vai verificar como estou hoje? Acho que minha pressão está muito alta! Estou com tontura desde que acordei e ainda não consegui me levantar.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot5Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot5WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot5Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue: "...",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot6Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot6WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot6Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot6Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot6WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot6Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Acalmar o paciente, realizar higienização das mãos e dos materiais e, em seguida verificar os sinais vitais.",
        score: 10,
        correct: true,
      },
      {
        dialogue:
          "Acalmar o paciente, verificar imediatamente o s sinais vitais, para evitar complicações e administrar medicação conforme prescrição.",
        score: 0,
        correct: false,
      },
    ],
    helperText:
      "Que pena! Você deve manter os cuidados para evitar a contaminação cruzada entre os pacientes.",
  },
  {
    characterName: "Florence",
    dialogue:
      "Seu José, o senhor está com a pressão alta: deu 184 x 97 mmHg. Mas não se preocupe, vou buscar sua medicação que vai ajudar a controlá-la.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot7Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot7WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot7Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "José",
    dialogue:
      "Certo enfermeira, obrigado. Notei que a senhora não veio me atender imediatamente. Ainda foi passar álcool nas mãos enquanto eu estava passando mal. Por que você fez isso?",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot9Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Senhor José, existem riscos de infecção que podem ser minimizados com a simples higienização das mãos. Antes de verificar os sinais vitais do senhor, eu estava examinando o senhor Oswaldo. Se ele possuísse alguma infecção, poderia ter trazido ao senhor e assim o senhor poderia agravar seu estado de saúde.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot8Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot8WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot8Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Assim, é muito importante que você também fique atento e exija que qualquer profissional que tenha contato com o senhor higienize as mãos antes e além das mãos toda superfície que ele utilize para prestar sua assistência. Existem cinco momentos que devemos higienizar as mãos e é importante tanto para os profissionais de saúde como para vocês que estão internados e seus acompanhantes. Vou mostrar a você esse momentos.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot8_1Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot8_1WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot8_1Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "José",
    dialogue:
      "Enfermeira, uma vez vieram aqui entregar esses álcool em gel e disseram que é só passar ele que já servia, não precisava me levantar e lavar as mãos na pia com água e sabão. A gente não acredita que esse álcool seja tão como água e sabão. A senhora acredita que é verdade isso que só o álcool já dá certo?",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot9Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot9Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot9WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot9Ogv,
        type: "video/ogg",
      },
    ],
    options: [
      {
        dialogue:
          "Indicar ao paciente que a higienização das mãos preferencialmente deve ser feita com água e sabão, mas caso o paciente tenha dificuldade de se levantar pode fazer com álcool.",
        score: 0,
        correct: false,
      },
      {
        dialogue:
          "Confirmar que o álcool poderá sim substituir a higienização das mãos com água e sabão desde que não existam sujidades visíveis nas mãos e que não tenha ido ao banheiro evacuar.",
        score: 10,
        correct: true,
      },
    ],
    helperText:
      "Que pena! Soluções com álcool para higienização das mãos só devem ser utilizadas quando não há sujidades visíveis nas mãos e se não utilizou o banheiro para evacuação. Em situações diferentes, a água e o sabão são indispensáveis.",
  },
  {
    characterName: "Florence",
    dialogue:
      "Mas além de higienizar as mãos e superfícies, os profissionais de saúde devem manter suas unhas em tamanho adequado e também atentar-se com o uso de acessórios como relógios, pulseiras, colares, anéis e brincos. Deve-se utilizar o mínimo possível já que eles tambémpodem gerar contaminações para entre os pacientes e para o próprio profissional.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot8_1Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot8_1WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot8_1Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue:
      "Além disso, para uma higienização das mãos adequada, é necessário seguir o passo-a-passo que mostrei a você e lembrar que com o álcool esse processo demora de 20 a 30 segundos e com água e sabão de 40 a 60 segundos.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot8Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot8WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot8Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "José",
    dialogue: "Muito obrigado pelas informações, enfermeira.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot11Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot11WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot11Ogv,
        type: "video/ogg",
      },
    ],
  },
  {
    characterName: "Florence",
    dialogue: "De nada. Qualquer dúvidas pode me chamar.",
    shots: [
      {
        id: 1,
        src: LevelSequence6Shot10Mp4,
        type: "video/mp4",
      },
      {
        id: 2,
        src: LevelSequence6Shot10WebM,
        type: "video/webm",
      },
      {
        id: 3,
        src: LevelSequence6Shot10Ogv,
        type: "video/ogg",
      },
    ],
  },
];

export default data;
