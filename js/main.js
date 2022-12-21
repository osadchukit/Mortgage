const banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
    logo: 'mono.png',
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
    logo: 'privat.png',
  },
  {
    id: 'qwsfw342rew5',
    name: 'NBU',
    interestRate: 4,
    maxLoan: 1000000,
    minPayment: 6000,
    loanTerm: 60,
    logo: 'nbu.png',
  },
  {
    id: 'ew5r3442rw5',
    name: 'Oschad',
    interestRate: 6,
    maxLoan: 1000000,
    minPayment: 6000,
    loanTerm: 60,
    logo: 'oschad.png',
  },
  {
    id: '42rw5ew5r34',
    name: 'Ukrgaz',
    interestRate: 5,
    maxLoan: 750000,
    minPayment: 4000,
    loanTerm: 36,
    logo: 'ukrgaz.png',
  },
  {
    id: '4wrt4r335t',
    name: 'Alfa',
    interestRate: 4,
    maxLoan: 100000,
    minPayment: 2000,
    loanTerm: 24,
  },
];

const rootRef = document.querySelector('#root');
const markup = `<div class="bank-box"></div>
      <div class="bank-info"></div>`;
rootRef.insertAdjacentHTML('beforeend', markup);

const renderBankList = banks =>
  banks
    .map(
      el => `<li class = "item__name" id="${el.id}">
      <img src="./img/${el.logo}" alt="логотип ${el.name} банку" width="50"/>${el.name}</li>`
    )
    .join('');

const listEl = document.createElement('ul');
const markupBtnAddBankItem = document.createElement('button');
markupBtnAddBankItem.classList.add('btn');
markupBtnAddBankItem.textContent = 'Додати банк';

listEl.insertAdjacentHTML('beforeend', renderBankList(banks));

const bankBox = document.querySelector('.bank-box');
const bankInfo = document.querySelector('.bank-info');

bankBox.append(listEl, markupBtnAddBankItem);

listEl.addEventListener('click', event => {
  const choosenBank = banks.find(bank => {
    // перевіряє клік на <img> logo і спрямовує клік на батьківський <li>
    if (!event.target.id && event.target.closest('li')) {
      return bank.id === event.target.closest('li').id;
    }
    return bank.id === event.target.id;
  });
  console.log('choosenBank :>> ', choosenBank);

  const bankInfoMarkup = `<h2>${choosenBank.name}bank</h2>
    <p>Сума займу: ${choosenBank.maxLoan} грн.</p>
    <p>Відсоткова ставка: ${choosenBank.interestRate}%</p>
    <p>Мінімальний платіж: ${choosenBank.minPayment} грн.</p>
    <p>Строк займу: ${choosenBank.loanTerm} місяців.</p>`;

  bankInfo.innerHTML = bankInfoMarkup;
});
