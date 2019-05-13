import styles from './index.css';

//append a ul
//and append a li with spot rover bing and joe
const root = document.getElementById('root');
const ul = document.createElement('ul');
const li = document.createElement('li');
console.log(root);
root.appendChild(ul);

li.textContent = 'skip';
ul.appendChild(li);

