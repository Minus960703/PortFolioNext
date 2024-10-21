// import { getProjectList } from '@/api/Home/project';

import { HomeProjectArea } from '@/components';

async function HomePage() {
  return (
    <section className='home'>
      <HomeProjectArea />
    </section>
  )
}

export default HomePage;