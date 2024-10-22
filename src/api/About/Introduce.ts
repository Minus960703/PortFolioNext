interface IntroduceElement {
  title: string;
  content: string;
}

interface IntroduceProps {
  [name: string]: IntroduceElement;
  // name_EN: IntroduceElement;
}

const Introduce: IntroduceProps = {
  name_KR: {
    title:'안녕하세요, 최진우입니다.',
    content: `열정적인 프론트엔드 개발자로서, 개발을 통해 세상을 변화시키는 것을 목표로 하고 있으며, 항상 새로운 기술을 배우고 적용하는 데 열정을 가지고 있습니다.\n
              컴포넌트의 공통화와 재사용성에 관심이 많고, 렌더링 속도와, threeJs, webGPU 에 관심이 많습니다.
              \n
              현재 근 3년정도 웹 개발자로 일해 왔습니다. 주로 사용하는 기술은 JavaScript, React, Next 등을 중점으로 사용하고 있습니다.\n
              문제들을 좋아하고, 그 문제에 대해 여러가지 시각적으로 논의 하는 것을 좋아합니다.
              \n
              개발을 하지 않을때는 양모펠트를 만들고, 헬스를 즐기며, 다양한 창작 활동을 통해 만드는 것을 좋아합니다.\n
              개발과 취미 생활에서 창의성과 도전하는 것을 중요하게 생각하며, 계속해서 성장하고 발전하는 개발자가 되고자 합니다.`
  },
  name_EN: {
    title: '3',
    content:'4',
  }
}

export { Introduce };