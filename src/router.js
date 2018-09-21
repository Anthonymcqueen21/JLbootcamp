import mainPage from './components/mainPage.vue';
import one from './views/1sn/1sn.vue';

import two from './views/2vs/2vs.vue';
import twoExamplesList from './views/2vs/examplesList.vue';
import twoExample1 from './components/2vs/examples/example1.vue';
import twoExample2 from './components/2vs/examples/example2.vue';
import twoChallengesList from './views/2vs/challengesList.vue';
import twoChallenge1 from './components/2vs/challenges/challenge1.vue';
import twoChallenge2 from './components/2vs/challenges/challenge2.vue';

export default[
  { path: '/', component: mainPage },
  { path: '/1sn', component: one },

  { path: '/2vs', component: two },
  { path: '/2vs/examples', component: twoExamplesList },
  { path: '/2vs/examples/1', component: twoExample1 },
  { path: '/2vs/examples/2', component: twoExample2 },
  { path: '/2vs/challenges', component: twoChallengesList },
  { path: '/2vs/challenges/1', component: twoChallenge1 },
  { path: '/2vs/challenges/2', component: twoChallenge2 },

]