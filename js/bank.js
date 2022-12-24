let banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];

const rootRef = document.querySelector('#root');
const markup = `
<div class="bank-box"></div>
<div class="bank-info"></div>`;

rootRef.insertAdjacentHTML('beforeend', markup);

const bankBox = document.querySelector('.bank-box');
const infoBank = document.querySelector('.bank-info');

const renderBankList = banks =>
  banks
    .map(
      el => `
  <li data-id="${el.id}" class = "item__name">${el.name} <div class="controls">
  <button class="edit">E</button>
<button class="delete">D</button>
</div></li>
  `
    )
    .join('');

const listEl = document.createElement('ul');

const markupBtnAddBankItem = document.createElement('button');
markupBtnAddBankItem.classList.add('btn');
markupBtnAddBankItem.textContent = 'Добавити банк';

listEl.insertAdjacentHTML('beforeend', renderBankList(banks));

bankBox.append(listEl, markupBtnAddBankItem);

const findBankById = id => banks.find(bank => bank.id === id);

listEl.addEventListener('click', event => {
  const choosenBankID = event.target.closest('.item__name').dataset.id;
  if (event.target.nodeName === 'UL') {
    return;
  }
  if (event.target.closest('.edit')) {
    console.log('edit');
    return;
  }
  if (event.target.closest('.delete')) {
    console.log('delete');
    deleteBank(choosenBankID);
    return;
  }
  const currentBank = findBankById(choosenBankID);
  bankInfoMarkup(currentBank);
});

function bankInfoMarkup({ name, interestRate, maxLoan, minPayment, loanTerm }) {
  const markup = `<h2>${name}</h2>
    <p>кридитна ставка ${interestRate}%</p>
    <p>максимальна сума ${maxLoan}грн</p>
    <p>мінімальний платіж ${minPayment}грн</p>
    <p>термін кридитуванню ${loanTerm} міс</p>`;

  infoBank.innerHTML = markup;
}

function deleteBank(id) {
  banks = banks.filter(bank => bank.id !== id);
  listEl.innerHTML = '';
  listEl.insertAdjacentHTML('beforeend', renderBankList(banks));
}
