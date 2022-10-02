'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const adminsAccounts = [
  {
    fullName: 'Javeed Javad',
    username: 'c1',
    password: 1111,
  },
  {
    fullName: 'Salim Salimi',
    username: 'c2',
    password: 2222,
  },
];

/////////////////////////////////////////////////
// Data

// Users Accounts
const accounts = [
  {
    accountNo: 1,
    owner: 'Ali Ahmadi',
    interestRate: 1.5,
    pin: 1111,
    deposits: [1800],
    withdrawals: [800],
    loans: [0],
    transfers: [200],
    receipts: [200],
    paidLoans: [0],
    senderAccountNo: [2],
    recipientAccountNo: [2],
    senderNames: ['Karim Karimi'],
    recipientNames: ['Karim Karimi'],
    depositsDates: ['2020-11-18T21:31:17.178Z'],
    withdrawalsDates: ['2020-12-18T21:32:17.178Z'],
    loansDates: ['2020-10-18T21:35:17.178Z'],
    transfersDates: ['2020-10-18T21:35:17.178Z'],
    receiptsDates: ['2019-11-18T21:53:17.178Z'],
    paidLoansDates: ['2018-11-18T21:12:17.178Z'],
    currency: 'USD',
    locale: 'en-US',
  },
  {
    accountNo: 2,
    owner: 'Karim Karimi',
    interestRate: 1.5,
    pin: 2222,
    deposits: [10, 50, 600, 50, 400, 5000],
    withdrawals: [500, 600, 300],
    loans: [500, 600, 300],
    transfers: [200, 10, 50],
    receipts: [20, 600, 10],
    senderAccountNo: [1, 1, 1],
    recipientAccountNo: [1, 1, 1],
    paidLoans: [0],
    senderNames: ['Ali Ahmadi', 'Ali Ahmadi', 'Ali Ahmadi'],
    recipientNames: ['Ali Ahmadi', 'Ali Ahmadi', 'Ali Ahmadi'],
    depositsDates: [
      '2020-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2021-01-28T09:15:04.904Z',
      '2021-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-08T14:11:59.604Z',
    ],
    withdrawalsDates: [
      '2020-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2021-01-28T09:15:04.904Z',
    ],
    loansDates: [
      '2020-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2021-01-28T09:15:04.904Z',
    ],
    transfersDates: [
      '2020-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2021-01-28T09:15:04.904Z',
    ],
    receiptsDates: [
      '2020-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2021-01-28T09:15:04.904Z',
    ],
    paidLoansDates: ['2019-11-18T21:53:17.178Z'],
    currency: 'USD',
    locale: 'US', //
  },
];

// ////////////////////////

//
/////////////////////////////////////////////////
// Selecting Elements

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const popup = document.querySelector('.popup');
const popupMessage = document.querySelector('.popup-message');

const loginForm = document.querySelector('.login');
const signUpFormPopup = document.querySelector('.sign-up__form-popup');
const signUpForm = document.querySelector('.sign-up__form');
const findAccountNav = document.querySelector('.find-accounts-nav');
const findAccounts = document.querySelector('.find-accounts');

// Selection Buttons
const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.admin-logout__btn');

const btnFindAccount = document.querySelector('.find-account__btn');
const btnLogoutFindAccount = document.querySelector('.account-logout__btn');

const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnDeposit = document.querySelector('.form__btn--deposit');
const btnWithdrawal = document.querySelector('.form__btn--withdrawal');
const btnClose = document.querySelector('.form__btn--close');
const btnClosePopup = document.querySelector('.popup .btn-close');
const btnSort = document.querySelector('.btn--sort');
const btnSignUp = document.querySelector(' .sign-up__btn');
const btnCloseSignUpForm = document.querySelector('.sign-up__form .btn-close');

// Selection Inputs
const inputs = document.querySelectorAll('input');
const inputSignUpOwner = document.querySelector('.input__sign-up__owner');
const inputSignUpPIN = document.querySelector('.input__sign-up__pin');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPassword = document.querySelector('.login__input--password');
const inputFindAccount = document.querySelector('.find-account__input');
const inputSignUpAccountNo = document.querySelector(
  '.input__sign-up__account-no'
);
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputDepositAmount = document.querySelector(
  '.form__input--deposit-amount'
);
const inputWithdrawalAmount = document.querySelector(
  '.form__input--withdrawal-amount'
);
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// -------------Selecting Labels
const labelWelcome = document.querySelector('.welcome');
const labelFindAccountWelcome = document.querySelector('.find-account-welcome');
const labelFindAccountValidation = document.querySelector(
  '.label-find-account'
);
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelMinus = document.querySelector('.minus__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const labelDeposits = document.querySelector('.summary__value--deposit');
const labelReceipt = document.querySelector('.summary__value--receipt');
const labelWithdrawals = document.querySelector('.summary__value--withdrawal');
const labelLoans = document.querySelector('.summary__value--loan');
const labelTransfers = document.querySelector('.summary__value--transfer');
const labelTimer = document.querySelector('.timer');
// Validation Labels
const validationLabels = document.querySelectorAll('.label-validation');
const labelUsername = document.querySelector('.label-username');
const labelPassword = document.querySelector('.label-password');
const labelTransferMessage = document.querySelector('.label__transfer-message');
const labelLoanMessage = document.querySelector('.label__loan-message');
const labelDepositMessage = document.querySelector('.label__deposit-message');
const labelWithdrawalMessage = document.querySelector(
  '.label__withdrawal-message'
);
const labelCloseMessage = document.querySelector('.label__close-message');

/////////////////////////////////////////////////
const maxLoanAmount = 5000;
const interestRate = 1.5;
let balance,
  depositsTotal,
  withdrawalsTotal,
  interestsTotal,
  minus,
  receiptsTotal,
  transfersTotal,
  loansTotal,
  paidLoansTotal,
  validLoanAmount;

/////////////////////////////////////////////////

// ---------------- Functions
// const navbar = document.querySelector('#navbar');

// Formatting Movements Date
function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  const hours = `${date.getHours()}`.padStart(2, 0);
  const minutes = `${date.getMinutes()}`.padStart(2, 0);
  const currentTime = `${hours}: ${minutes}`;

  if (daysPassed === 0) return `Today ${currentTime}`;
  if (daysPassed === 1) return `Yesterday ${currentTime}`;
  if (daysPassed <= 7) return `${daysPassed} days ago ${currentTime}`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();

  return `${year}/${month}/${day}: ${hours}:${minutes}`;
  // return new Intl.DateTimeFormat(locale).format(date);
  // console.log(
  //   new Intl.DateTimeFormat('en-US').format(new Date('2020-11-18T21:31:17.178Z'))
  // );
}

// Formatting Currency
function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

// Displaying Movements
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = '';

  // Displaying Deposits
  acc.deposits.forEach(function (deposit, i) {
    const date = new Date(acc.depositsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(deposit, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">${
          i + 1
        } Deposit </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  // Displaying Receipts
  acc.receipts.forEach(function (receipt, i) {
    const date = new Date(acc.receiptsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(receipt, acc.locale, acc.currency);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--receipt">${
            i + 1
          } Receipt </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__sender"><span class="from">From </span>${
            acc.senderNames[i]
          }</div>
          <div class="movements__sender-account-no"><span class="account-no">Account No</span> ${
            acc.senderAccountNo[i]
          }</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  // Displaying Withdrawals
  acc.withdrawals.forEach(function (withdrawal, i) {
    const date = new Date(acc.withdrawalsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(withdrawal, acc.locale, acc.currency);

    const html = `
            <div class="movements__row">
              <div class="movements__type movements__type--withdrawal">${
                i + 1
              } Withdrawal </div>
              <div class="movements__date">${displayDate}</div>
             
              <div class="movements__value">${formattedMov}</div>
            </div>
          `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  // Displaying Transfers
  acc.transfers.forEach(function (transfer, i) {
    const date = new Date(acc.transfersDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(transfer, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--transfer">${
          i + 1
        } Transfer </div>
        <div class="movements__date">${displayDate}</div>
        <div class ="movements__recipient"><span class="to">To</span> ${
          acc.recipientNames[i]
        }</div>
        <div class ="movements__recipient"><span class="account-no">Account No</span> ${
          acc.recipientAccountNo[i]
        }</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  //  Displaying Loans
  acc.loans.forEach(function (loan, i) {
    const date = new Date(acc.loansDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(loan, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--loan">${i + 1} Loan </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  //  Displaying Paid Loan
  acc.paidLoans.forEach(function (loan, i) {
    const date = new Date(acc.paidLoansDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(loan, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type-paid-loan">${
          i + 1
        } Paid Loan </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// Abbreviating Username -> Karim Karimi -> kk
function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username =
      acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('') + acc.accountNo;
  });
}
createUsernames(accounts);

// Updating User Interface -> movements, summary and ..,
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Creating Logout Timer
function startLogOutTimer() {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.display = 'grid';
      btnLogout.style.display = 'none';
      loginForm.style.display = 'block';
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 1200;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}

// Clearing inputs
function clearInputs() {
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('border-red');
  });
}

// Clearing Validation Message
function clearValidationMessages() {
  validationLabels.forEach(label => (label.textContent = ''));
  inputs.forEach(input => input.classList.remove('border-red'));
}

//

//  --------------------- Event handlers ---------------
let currentAdmin, currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = accounts[0];
// updateUI(currentAccount);
// containerApp.style.display = 'grid';
// loginForm.style.display = 'none';
// findAccounts.style.display = 'none';

// Login
btnLogin.addEventListener('click', function (e) {
  // Prevents the form from submitting
  e.preventDefault();

  currentAdmin = adminsAccounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAdmin?.password === +inputLoginPassword.value) {
    console.log('hi');
    // Display UI and message
    labelWelcome.textContent = `Welcome back Cashier, ${
      currentAdmin.fullName.split(' ')[0]
    }`;
    loginForm.style.display = 'none';
    btnLogout.style.display = 'block';
    btnLogoutFindAccount.style.display = 'none';
    findAccountNav.style.display = 'flex';
    clearValidationMessages();
    clearInputs();

    // Clear input fields
    clearInputs();
    inputLoginPassword.blur();

    hideZeroMovements();
  }

  //
  // Checking Login Validation
  validateLogin(currentAccount);
});

//

// Find Account
btnFindAccount.addEventListener('click', function (e) {
  // Prevents the form from submitting
  e.preventDefault();

  validateFindAccount();

  currentAccount = accounts.find(
    acc => acc.accountNo === +inputFindAccount.value
  );
  console.log('currentAccount');
  if (currentAccount?.accountNo === +inputFindAccount.value) {
    // Display UI and message
    labelFindAccountWelcome.textContent = `Account: ${currentAccount.accountNo} found. Username: ${currentAccount.username}. Owner: ${currentAccount.owner}`;
    containerApp.style.display = 'grid';
    findAccounts.style.display = 'none';
    btnLogout.style.display = 'none';
    btnLogoutFindAccount.style.display = 'block';
    clearValidationMessages();
    clearInputs();

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // Formatting date according to the locale
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Custom Date Formatting
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    clearInputs();
    inputFindAccount.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);

    hideZeroMovements();
  }

  //
});

btnLogoutFindAccount.addEventListener('click', function (e) {
  e.preventDefault();
  findAccounts.style.display = 'grid';
  btnLogoutFindAccount.style.display = 'none';
  btnLogout.style.display = 'block';
  labelFindAccountWelcome.textContent = `Find the account to get started`;
  containerApp.style.display = 'none';
  currentAccount = undefined;
});

//

// Depositing Money
btnDeposit.addEventListener('click', function (e) {
  e.preventDefault();

  const depositAmount = +inputDepositAmount.value;
  const payTotalMinus = minus;
  const depositTheRest = depositAmount - minus;

  validateDeposit(currentAccount, depositAmount, payTotalMinus, depositTheRest);

  if (depositAmount > 0) {
    if (minus > 0 && depositAmount <= minus) {
      setTimeout(function () {
        // Add movement
        currentAccount.paidLoans.push(depositAmount);

        // Add paid loan date
        currentAccount.paidLoansDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);

        hideZeroMovements();

        // Reset timer
        clearInterval(timer);
        timer = startLogOutTimer();
      }, 1500);
    } else if (minus === 0) {
      setTimeout(function () {
        // Add movement
        currentAccount.deposits.push(depositAmount);

        // Add deposit date
        currentAccount.depositsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);

        hideZeroMovements();

        // Reset timer
        clearInterval(timer);
        timer = startLogOutTimer();
      }, 1500);
    } else if (minus > 0 && minus < depositAmount) {
      setTimeout(function () {
        // Add movement
        currentAccount.paidLoans.push(payTotalMinus);

        // Add paid loan date
        currentAccount.paidLoansDates.push(new Date().toISOString());

        // Add movement
        currentAccount.deposits.push(depositTheRest);

        // Add deposit date
        currentAccount.depositsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);

        hideZeroMovements();

        // Reset timer
        clearInterval(timer);
        timer = startLogOutTimer();
      }, 1500);
    }
  }
});

// Withdrawal Money
btnWithdrawal.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputWithdrawalAmount.value;

  const balance = Math.ceil(currentAccount.balance);

  if (amount > 0 && amount <= balance) {
    // Doing the withdrawal
    currentAccount.withdrawals.push(amount);

    // Add withdrawal date
    currentAccount.withdrawalsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount, amount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
    hideZeroMovements();
  }

  // Checking Withdrawal Validation
  validateWithdrawal(currentAccount, amount, balance);
});
//

//

// Loaning Money
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  // const maxLoanAmount = currentAccount.deposits
  //   .map(mov => mov * 0.1)
  //   .reduce((a, b) => Math.max(a, b));

  // Checking Loan Validation
  validateLoan(amount);

  if (amount > 0 && amount <= validLoanAmount && balance === 0) {
    setTimeout(function () {
      // Add movement
      currentAccount.loans.push(amount);

      // Add loan date
      currentAccount.loansDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();

      inputLoanAmount.value = '';
      hideZeroMovements();
    }, 2500);
  }
});

//

// Transferring Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const recipientAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  validateTransfer(currentAccount, recipientAcc, amount);

  if (
    amount > 0 &&
    recipientAcc &&
    amount <= currentAccount.balance &&
    recipientAcc?.accountNo !== currentAccount.accountNo
  ) {
    // Doing the transfer
    currentAccount.transfers.push(amount);
    recipientAcc.receipts.push(amount);

    currentAccount.recipientNames.push(recipientAcc.owner);
    currentAccount.recipientAccountNo.push(recipientAcc.accountNo);
    recipientAcc.senderNames.push(currentAccount.owner);
    recipientAcc.senderAccountNo.push(currentAccount.accountNo);
    // Add transfer date
    currentAccount.transfersDates.push(new Date().toISOString());
    recipientAcc.receiptsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();

    hideZeroMovements();
  }
});

// Closing(Deleting) Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.display = 'none';
    loginForm.style.display = 'block';
    btnLogout.style.display = 'none';
    clearValidationMessages();
    clearInputs();
    clearInterval(timer);

    inputClosePin.value = inputCloseUsername.value = '';
    popup.classList.add('show');
    popupMessage.textContent = 'You have successfully deleted your account';
    labelWelcome.textContent = 'Log in to get started';
  }

  // Checking Account Closing Validation
  validateAccountClosing(currentAccount);
});

// Closing Popup Message
btnClosePopup.addEventListener('click', () => {
  popupMessage.textContent = '';
  popup.classList.remove('show');
  clearValidationMessages();
  clearInputs();
});
popup.addEventListener('click', e => {
  if (e.target.classList.contains('popup')) {
    popupMessage.textContent = '';
    popup.classList.remove('show');
    clearValidationMessages();
    clearInputs();
  }
});

//
// Sorting Movements
// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount, !sorted);
//   sorted = !sorted;
// });

// Login out of Account
btnLogout.addEventListener('click', () => {
  findAccountNav.style.display = 'none';
  btnLogout.style.display = 'none';
  loginForm.style.display = 'block';
  clearValidationMessages();
  clearInputs();
  labelWelcome.textContent = 'Log in to get started';
  clearInterval(timer);
});

// Calculating Summary -> in, out, interest, balance, loanTotal, withdrawalsTotal, depoistsTotal, transfersTotal, receiptsTotal & Minus
function calcDisplaySummary(acc) {
  // Reassigning  variables defined at the beginning

  acc.depositsTotal = acc.deposits.reduce((cur, nxt) => cur + nxt, 0);
  depositsTotal = acc.depositsTotal;

  acc.loansTotal = acc.loans.reduce((cur, nxt) => cur + nxt, 0);
  loansTotal = acc.loansTotal;

  acc.transfersTotal = acc.transfers.reduce((cur, nxt) => cur + nxt, 0);
  transfersTotal = acc.transfersTotal;

  acc.withdrawalsTotal = acc.withdrawals.reduce((cur, nxt) => cur + nxt, 0);
  withdrawalsTotal = acc.withdrawalsTotal;

  acc.receiptsTotal = acc.receipts.reduce((cur, nxt) => cur + nxt, 0);
  receiptsTotal = acc.receiptsTotal;

  acc.interestsTotal = acc.loansTotal * (acc.interestRate / 100);
  interestsTotal = acc.interestsTotal;

  acc.paidLoansTotal = acc.paidLoans.reduce((cur, nxt) => cur + nxt, 0);
  paidLoansTotal = acc.paidLoansTotal;

  acc.minus = acc.loansTotal + acc.interestsTotal - acc.paidLoansTotal;
  minus = acc.minus;

  acc.balance =
    acc.depositsTotal +
    acc.receiptsTotal +
    acc.loansTotal -
    (acc.withdrawalsTotal + acc.transfersTotal);
  balance = acc.balance;
  labelBalance.textContent = formatCur(balance, acc.locale, acc.currency);

  validLoanAmount = maxLoanAmount - (loansTotal - paidLoansTotal);

  labelMinus.textContent = formatCur(minus, acc.locale, acc.currency);

  labelDeposits.textContent = formatCur(
    depositsTotal,
    acc.locale,
    acc.currency
  );
  labelReceipt.textContent = formatCur(receiptsTotal, acc.locale, acc.currency);

  const incomes = depositsTotal + loansTotal + receiptsTotal;
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  labelWithdrawals.textContent = formatCur(
    withdrawalsTotal,
    acc.locale,
    acc.currency
  );
  labelTransfers.textContent = formatCur(
    transfersTotal,
    acc.locale,
    acc.currency
  );

  const out = transfersTotal + withdrawalsTotal;
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  labelLoans.textContent = formatCur(loansTotal, acc.locale, acc.currency);

  const interest = interestsTotal;
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
}

//

//    -------------- Signing up / Creating Account ----------

btnSignUp.addEventListener('click', function (e) {
  e.preventDefault();
  signUpFormPopup.classList.add('show');
});

const accountNumbers = [];
accounts.forEach(acc => accountNumbers.push(acc.accountNo));

const maxAccountNo = accountNumbers.reduce((a, b) => {
  if (a > b) return a;
  else return b;
});
const newAccountNo = maxAccountNo + 1;

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const owner = inputSignUpOwner.value;
  const pin = +inputSignUpPIN.value;

  accounts.push({
    accountNo: newAccountNo,
    owner: owner,
    interestRate: interestRate,
    pin: pin,
    deposits: [0],
    withdrawals: [0],
    loans: [0],
    transfers: [0],
    receipts: [0],
    paidLoans: [0],
    senderAccountNo: [0],
    recipientAccountNo: [0],
    senderNames: [''],
    recipientNames: [''],
    depositsDates: ['2020-11-18T21:31:17.178Z'],
    withdrawalsDates: ['2020-12-18T21:32:17.178Z'],
    loansDates: ['2020-10-18T21:35:17.178Z'],
    transfersDates: ['2020-10-18T21:35:17.178Z'],
    receiptsDates: ['2019-11-18T21:53:17.178Z'],
    paidLoansDates: ['2018-11-18T21:12:17.178Z'],
    currency: 'USD',
    locale: 'en-US',
  });

  const user =
    inputSignUpOwner.value
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('') + newAccountNo;

  if (owner !== '' && pin !== '' && pin !== 0) {
    signUpFormPopup.classList.remove('show');
    popup.classList.add('show');
    popupMessage.textContent = `You have successfully created your account. Your account number is ${newAccountNo} and user is ${user} `;
    createUsernames(accounts);
    hideZeroMovements();
  }
});

btnCloseSignUpForm.addEventListener('click', function (e) {
  e.preventDefault();
  signUpFormPopup.classList.remove('show');
});

//

// ------------Validation Functions-----------

// Setting Validation Messages Timer
function setValidationMessagesTimer() {
  setTimeout(() => {
    clearValidationMessages();
    inputs.forEach(input => input.classList.remove('border-red'));
  }, 5000);
}

// Login Validation
function validateLogin(currentAccount) {
  clearValidationMessages();

  // Username Validation
  if (inputLoginUsername.value === '') {
    labelUsername.textContent = 'Enter user';
    inputLoginUsername.classList.add('border-red');
  } else if (inputLoginUsername.value !== currentAdmin?.username) {
    labelUsername.textContent = 'Invalid user';
    inputLoginUsername.classList.add('border-red');
  } else {
    inputLoginUsername.classList.remove('border-red');
    labelUsername.textContent = '';
  }

  // PIN Validation
  if (inputLoginPassword.value === '') {
    labelPassword.textContent = 'Enter Password';
    inputLoginPassword.classList.add('border-red');
  } else if (currentAdmin.password !== +inputLoginPassword?.value) {
    labelPassword.textContent = 'Invalid Password';
    inputLoginPassword.classList.add('border-red');
  } else {
    labelPassword.textContent = '';
    inputLoginPassword.classList.remove('border-red');
  }
  setValidationMessagesTimer();
}

// Find Account Validation
function validateFindAccount() {
  clearValidationMessages();

  // Username Validation
  if (inputFindAccount.value == '' || inputFindAccount.value == '') {
    labelFindAccountValidation.textContent = 'Enter Accout No';
    inputFindAccount.classList.add('border-red');
  } else if (+inputFindAccount.value !== currentAccount?.accountNo) {
    labelFindAccountValidation.textContent = 'Invalid Account No';
    inputFindAccount.classList.add('border-red');
  } else {
    inputLoginUsername.classList.remove('border-red');
    labelUsername.textContent = '';
  }

  setValidationMessagesTimer();
}

// Transferring Validation
function validateTransfer(currentAccount, recipientAcc, amount) {
  clearValidationMessages();

  // Transfer Amount Validation
  if (inputTransferAmount.value == '' && inputTransferAmount.value === '') {
    labelTransferMessage.textContent =
      'Enter the amount of money you want to transfer';
    inputTransferAmount.classList.add('border-red');
  } else if (inputTransferAmount.value == 0) {
    labelTransferMessage.textContent = `You can't transfer 0-${currentAccount.currency}`;
    inputTransferAmount.classList.add('border-red');
  } else if (balance === 0) {
    labelTransferMessage.textContent = `You don't have money to transfer.`;
    inputTransferAmount.classList.add('border-red');
  } else if (amount > 0 && balance < amount) {
    labelTransferMessage.textContent = `You don't have enough money to transfer.`;
    inputTransferAmount.classList.add('border-red');
  }

  // Transfer To(Receiver) Validation
  if (inputTransferTo.value === '') {
    labelTransferMessage.textContent = `Enter Receiver's username`;
    inputTransferTo.classList.add('border-red');
  } else if (inputTransferTo.value !== '' && !recipientAcc) {
    labelTransferMessage.textContent = 'Invalid Receiver Name';
    inputTransferTo.classList.add('border-red');
  } else if (inputTransferTo.value === currentAccount.username) {
    labelTransferMessage.textContent = `You can't transfer money to your own account`;
    inputTransferTo.classList.add('border-red');
  } else if (
    recipientAcc &&
    recipientAcc.username !== currentAccount.username
  ) {
    inputTransferTo.classList.remove('border-red');
  }

  // if both are valid
  if (
    amount > 0 &&
    amount <= balance &&
    recipientAcc &&
    recipientAcc.username !== currentAccount.username
  ) {
    popup.classList.add('show');
    popupMessage.textContent = `You have successfully transferred ${amount}${currentAccount.currency} to ${recipientAcc.owner}, with account no ${recipientAcc.accountNo}`;
    inputTransferTo.classList.remove('border-red');
    inputTransferAmount.classList.remove('border-red');
  }

  setValidationMessagesTimer();
}

// Loan Validation
function validateLoan(amount) {
  clearValidationMessages();

  if (amount > 0 && balance > 0) {
    labelLoanMessage.textContent = `You can't loan money if your balance is not zero`;
    inputLoanAmount.classList.add('border-red');
  } else if (inputLoanAmount.value == '' || inputLoanAmount.value === '') {
    labelLoanMessage.textContent = 'Enter Loan Amount';
    inputLoanAmount.classList.add('border-red');
  } else if (
    amount <= 0 ||
    (amount > validLoanAmount && validLoanAmount !== 0)
  ) {
    labelLoanMessage.textContent = `Loan must be between 1 ${currentAccount.currency} and ${validLoanAmount}${currentAccount.currency}`;
    inputLoanAmount.classList.add('border-red');
  } else if (
    amount > 0 &&
    currentAccount.loansTotal - currentAccount.paidLoansTotal === maxLoanAmount
  ) {
    labelLoanMessage.textContent = `You have loaned max valid loan amount. You can't loan more money`;
    inputLoanAmount.classList.add('border-red');
  } else if (
    amount > 0 &&
    amount <= validLoanAmount &&
    balance === 0 &&
    validLoanAmount !== 0
  ) {
    popup.classList.add('show');
    popupMessage.textContent = `You have successfully loaned ${inputLoanAmount.value}${currentAccount.currency}`;
    inputLoanAmount.classList.remove('border-red');
  }
  setValidationMessagesTimer();
}

// Deposit Validation
function validateDeposit(
  currentAccount,
  depositAmount,
  payTotalMinus,
  depositTheRest
) {
  clearValidationMessages();

  switch (true) {
    case inputDepositAmount.value == '':
      labelDepositMessage.textContent = 'Enter deposit amount';
      inputDepositAmount.classList.add('border-red');
      break;
    case inputDepositAmount.value != '' && depositAmount <= 0:
      labelDepositMessage.textContent = `You can't deposit 0${currentAccount.currency} or less 'than 0${currentAccount.currency}`;
      inputDepositAmount.classList.add('border-red');
      break;
    case minus > 0 && depositAmount > 0 && depositAmount < minus:
      popup.classList.add('show');
      popupMessage.textContent = `You have successfully paid ${depositAmount}${currentAccount.currency} of your total Minus ---> ${minus}${currentAccount.currency}.`;
      inputDepositAmount.classList.remove('border-red');
      break;

    case minus > 0 && depositAmount > minus:
      popup.classList.add('show');
      popupMessage.textContent = `You have successfully paid your total Minus ${minus}${currentAccount.currency}, and also deposited ${depositTheRest}${currentAccount.currency} to your account.`;
      inputDepositAmount.classList.remove('border-red');
      break;

    case depositAmount > 0 && minus === 0:
      popup.classList.add('show');
      popupMessage.textContent = `You have successfully deposited ${depositAmount}${currentAccount.currency}`;
      inputDepositAmount.classList.remove('border-red');
      break;

    case depositAmount > 0 && minus > 0 && depositAmount === minus:
      popup.classList.add('show');
      popupMessage.textContent = `You have successfully paid your total minus ${payTotalMinus}${currentAccount.currency}.`;
      inputDepositAmount.classList.remove('border-red');
      break;
  }

  setValidationMessagesTimer();
}

//

// Withdrawal Validation
function validateWithdrawal(currentAccount, amount, balance) {
  clearValidationMessages();
  if (inputWithdrawalAmount.value === '') {
    labelWithdrawalMessage.textContent = 'Enter Withdrawal amount';
    inputWithdrawalAmount.classList.add('border-red');
  }
  if (inputWithdrawalAmount.value !== '' && amount <= 0) {
    labelWithdrawalMessage.textContent = `Withdrawal amount must be greater than 0${currentAccount.currency}`;
    inputWithdrawalAmount.classList.add('border-red');
  } else if (balance === 0) {
    labelWithdrawalMessage.textContent = `You Don't have balance to withdraw`;
    inputWithdrawalAmount.classList.add('border-red');
  } else if (amount > balance && amount > 0) {
    labelWithdrawalMessage.textContent = `You can't withdraw more than ${balance}${currentAccount.currency}`;
    inputWithdrawalAmount.classList.add('border-red');
  } else if (amount > 0 && amount <= balance) {
    inputWithdrawalAmount.classList.remove('border-red');
    popup.classList.add('show');
    popupMessage.textContent = `You have successfully withdrawn ${amount}${currentAccount.currency}`;
  }
  setValidationMessagesTimer();
}

// Account Closing(Deleting) Validation
function validateAccountClosing(currentAccount) {
  clearValidationMessages();
  // PIN Validation
  if (+inputClosePin.value == '') {
    labelCloseMessage.textContent = 'Enter pin';
    inputClosePin.classList.add('border-red');
  } else if (+inputClosePin.value !== currentAccount.pin)
    labelCloseMessage.textContent = 'Invalid pin';
  else if (+inputClosePin.value === currentAccount.pin) {
    inputClosePin.classList.remove('border-red');
  }

  // Username Validation
  if (inputCloseUsername.value === '') {
    labelCloseMessage.textContent = 'Enter user';
    inputCloseUsername.classList.add('border-red');
  } else if (
    inputCloseUsername.value !== '' &&
    inputCloseUsername.value !== currentAccount.username
  ) {
    inputCloseUsername.classList.add('border-red');
    labelCloseMessage.textContent = 'Invalid username';
  } else if (inputCloseUsername.value === currentAccount.username) {
    inputCloseUsername.classList.remove('border-red');
  }
}

//

// Hiding Movements that are === 0
function hideZeroMovements() {
  const values = document.querySelectorAll('.movements__value');

  values.forEach(value => {
    if (value.innerText[1] == 0 || value.innerText == '$0.00') {
      value.parentElement.style.display = 'none';
    }
  });
}

hideZeroMovements();
