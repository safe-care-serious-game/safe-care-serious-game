import Level4Shot1 from '../videos/level4/Level4Shot1.mp4'
import Level4Shot2 from '../videos/level4/Level4Shot2.mp4'
import Level4Shot3 from '../videos/level4/Level4Shot3.mp4'
import Level4Shot4 from '../videos/level4/Level4Shot4.mp4'
import Level4Shot5 from '../videos/level4/Level4Shot5.mp4'
import Level4Shot6 from '../videos/level4/Level4Shot6.mp4'
import Level4Shot7 from '../videos/level4/Level4Shot7.mp4'
import Level4Shot8 from '../videos/level4/Level4Shot8.mp4'
import Level4Shot9 from '../videos/level4/Level4Shot9.mp4'
import Level4Shot10 from '../videos/level4/Level4Shot10.mp4'
import Level4Shot11 from '../videos/level4/Level4Shot11.mp4'
import Level4Shot12 from '../videos/level4/Level4Shot12.mp4'
import Level4Shot13 from '../videos/level4/Level4Shot13.mp4'
import Level4Shot14 from '../videos/level4/Level4Shot14.mp4'
import Level4Shot15 from '../videos/level4/Level4Shot15.mp4'
import Level4Shot16 from '../videos/level4/Level4Shot16.mp4'

const data = [
  {
    characterName: 'Enfermeira Florence Nightingale',
    dialogue: 'Bom dia Waldo, tudo bem? Queria conversar com você sobre o paciente do 303C.',
    shot: Level4Shot1
  },
  {
    characterName: 'Florence',
    dialogue: 'Eu e o Hipócrates constatamos que o paciente do 303C, o senhor Oswaldo Cruz, teve piora no seu estado respiratório nos últimos três dias. Ele está ficando por um período maior de tempo restrito ao leito.',
    shot: Level4Shot2
  },
  {
    characterName: 'Florence',
    dialogue: 'Nas últimas 24 horas, não houve relato nem pela equipe de efermagem nem pelo próprio paciente ou seu cuidador que esse paciente tenha deambulado. Estou começando a ficar preocupada. Você conhece os riscos de um paciente restrito ao leito?',
    shot: Level4Shot3
  },
  {
    characterName: 'Fisioterapeuta Waldo de Moraes',
    dialogue: '...',
    shot: Level4Shot4
  },
  {
    shot: Level4Shot4,
    options: [
      {
        dialogue: 'Cefaleia, náuseas, hematomas, prurido.',
        score: 0,
        correct: false
      },
      {
        dialogue: 'Lesões por pressão, trombose venosa profunda, distrofias musculares, maceração da pele, constipação, entre outros.',
        score: 10,
        correct: true
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Fico feliz que você entende esses riscos. Quais estratégias você sugere para que esse paciente possa melhorar seu estado respiratório e evitar esses riscos, principalmente o desenvolvimento de LPP?',
    shot: Level4Shot5
  },
  {
    characterName: 'Waldo',
    dialogue: 'Florence, a Orem me informou que esse paciente já está recebendo os cuidados para previnir LPP. Quais cuidados vocês estão realizando?',
    shot: Level4Shot6
  },
  {
    characterName: 'Florence',
    dialogue: '...',
    shot: Level4Shot7
  },
  {
    shot: Level4Shot7,
    options: [
      {
        dialogue: 'Avaliação diária da pele, mudança de decúbito a cada duas horas, manter a pele hidratada, evitar cisalhamento, observar roupa de cama para evitar drobraduras.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Uso da escala de Morse, evitar deambulação e reduzir ingesta hídrica.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Waldo',
    dialogue: 'Florence, acredito que os cuidados que vocês estão realizando são excelentes. Mas vamos avaliar o paciente e ver o que mais podemos definir para melhorar seu estado de saúde e previnir possíveis complicações.',
    shot: Level4Shot8
  },
  {
    characterName: '',
    dialogue: '',
    shot: Level4Shot9
  },
  {
    characterName: 'Florence',
    dialogue: 'Bom dia senhor Oswaldo, como o senhor está se sentindo hoje?',
    shot: Level4Shot10
  },
  {
    characterName: 'Oswaldo Cruz',
    dialogue: 'Bom dia enfermeira, estou do mesmo jeito, sem conseguir respirar direito.',
    shot: Level4Shot11
  },
  {
    characterName: 'Florence',
    dialogue: 'O que o senhor tem feito durante o dia?',
    shot: Level4Shot12
  },
  {
    characterName: 'Oswaldo Cruz',
    dialogue: 'Estou passando o dia inteiro deitado aqui. Ontem tentei caminhar, mas não consegui. Pela manhã me colocaram na poltrona, não fiquei cinco minutos, e ainda senti falta de ar.',
    shot: Level4Shot13
  },
  {
    characterName: 'Waldo',
    dialogue: 'Entendo sua situação. O senhor sabe que é importante que caminhe e se movimente para ajudar na sua recuperação e assim poder ter alta mais rápido.',
    shot: Level4Shot14
  },
  {
    characterName: 'Waldo',
    dialogue: 'Vamos examinar o senhor, para que possamos ver como melhorar sua condição respiratória e assim sair desse leito.',
    shot: Level4Shot15
  },
  {
    shot: Level4Shot15,
    options: [
      {
        dialogue: 'O fisioterapeuta deverá avaliar o paciente, traçar um plano de cuidados adequado e colocá-lo em prática.',
        score: 0,
        correct: false
      },
      {
        dialogue: 'O fisioterapeuta e a enfermeira deverão higienizar as mãos, avaliar o paciente em conjunto e traçar cuidados que podem ser adotados.',
        score: 10,
        correct: true
      }
    ]
  },
  {
    transitionText: 'Após avaliação da enfermeira e do fisioterapeuta, eles irão discutir quais estratégias irão realizar com o paciente para melhoria de seu padrão respiratório e evitar a incidência da LPP. Avalie a seguir a conduta da equipe de saúde:'
  },
  {
    characterName: 'Florence',
    dialogue: 'Irei reforçar diariamente a avaliação da pele, a utilização da escala de Braden e a inspeção da presença de edemas com a equipe de enfermagem.',
    shot: Level4Shot5
  },
  {
    shot: Level4Shot5,
    dialogue: 'Irei reforçar diariamente a avaliação da pele, a utilização da escala de Braden e a inspeção da presença de edemas com a equipe de enfermagem.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Também irei prescrever a utilização de solução hidratante seis vezes ao dia nas proeminências ósseas.',
    shot: Level4Shot3
  },
  {
    shot: Level4Shot3,
    dialogue: 'Também irei prescrever a utilização de solução hidratante seis vezes ao dia nas proeminências ósseas.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 0,
        correct: false
      },
      {
        dialogue: 'Falsa.',
        score: 10,
        correct: true
      }
    ]
  },
  {
    characterName: 'Waldo',
    dialogue: 'Vou prescrever uma rotina de fisioterapia motora para mobilizar o paciente no leito modificação seu decúbito, bem como o trabalho de fisioterapia respiratória para melhorar o padrão respeitório do paciente para conseguirmos retirá-lo do leito.',
    shot: Level4Shot6
  },
  {
    shot: Level4Shot6,
    dialogue: 'Vou prescrever uma rotina de fisioterapia motora para mobilizar o paciente no leito modificação seu decúbito, bem como o trabalho de fisioterapia respiratória para melhorar o padrão respeitório do paciente para conseguirmos retirá-lo do leito.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Será prescrito mudança de decúbito a cada duas horas. E orientações ao paciente e seus cuidados sobre a importância dessas mudanças.',
    shot: Level4Shot2
  },
  {
    shot: Level4Shot2,
    dialogue: 'Será prescrito mudança de decúbito a cada duas horas. E orientações ao paciente e seus cuidados sobre a importância dessas mudanças.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Solicitarei uma avalição da nutricionista, a fim de promover o suporte nutricional adequado e avaliar o estado nutricional do paciente.',
    shot: Level4Shot3
  },
  {
    shot: Level4Shot3,
    dialogue: 'Solicitarei uma avalição da nutricionista, a fim de promover o suporte nutricional adequado e avaliar o estado nutricional do paciente.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Irei prescrever a utilização de coberturas adequadas nas áreas de proeminências ósseas.',
    shot: Level4Shot2
  },
  {
    shot: Level4Shot2,
    dialogue: 'Irei prescrever a utilização de coberturas adequadas nas áreas de proeminências ósseas.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Irei prescrever a utilização de coxins para diminuir a pressão nas proeminências ósseas do paciente.',
    shot: Level4Shot3
  },
  {
    shot: Level4Shot3,
    dialogue: 'Irei prescrever a utilização de coxins para diminuir a pressão nas proeminências ósseas do paciente.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Florence',
    dialogue: 'Também irei prescrever a manutenção da cabeceira do leito do paciente em 45 graus para melhorar o seu estado respiratório e reduzir as chances de cisalhamento do paciente no leito.',
    shot: Level4Shot2
  },
  {
    shot: Level4Shot2,
    dialogue: 'Também irei prescrever a manutenção da cabeceira do leito do paciente em 45 graus para melhorar o seu estado respiratório e reduzir as chances de cisalhamento do paciente no leito.',
    levelSubject: 'para prevenção de LPP',
    options: [
      {
        dialogue: 'Verdadeira.',
        score: 10,
        correct: true
      },
      {
        dialogue: 'Falsa.',
        score: 0,
        correct: false
      }
    ]
  },
  {
    characterName: 'Waldo',
    dialogue: 'Acredito que já consideramos importantes intervenções para realizar com o paciente Oswaldo. Vamos colocá-las em prática e reavaliar o paciente amanhã novamente.',
    shot: Level4Shot8
  },
  {
    characterName: 'Florence',
    dialogue: 'Certo Waldo.',
    shot: Level4Shot16
  }
];

export default data;
