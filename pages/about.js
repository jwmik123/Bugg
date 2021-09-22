import { useRouter } from 'next/router';

import Header from '../components/Header';

function About() {

    const router = useRouter();

    return (
      <div>
        <Header />
      </div>
    )
}

export default About