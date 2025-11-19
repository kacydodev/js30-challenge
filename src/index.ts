import './style.css';
import { setupFooter } from './setupFooter.ts';
import { setupMain } from './setupMain.ts';

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = `
<main></main>
<footer></footer>
`;

setupMain(document.querySelector('main')!);
setupFooter(document.querySelector('footer')!);
