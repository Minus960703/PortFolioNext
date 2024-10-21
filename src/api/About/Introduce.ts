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
    title:'1',
    content:'2'
  },
  name_EN: {
    title: '3',
    content:'4',
  }
}

export { Introduce };