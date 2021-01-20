'use strict';

const collapsibles = document.querySelectorAll('.collapse-header').forEach(elem => {
  elem.addEventListener('click', toggleCollapse);
  elem.addEventListener('touchstart', toggleCollapse);
});

function toggleCollapse() {
  const parent = this.parentNode;
  const content = this.nextElementSibling;
  const icon = this.querySelector('i.material-icons');
  const open = parent.classList.contains('open');
  parent.classList.toggle('open',!open);
  if (open) {
    content.style.maxHeight = null;
    icon.innerText = 'expand_more';
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerText = 'expand_less';
  }
}
