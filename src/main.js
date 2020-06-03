import $ from 'jquery';
// import { camelCaseView } from './views/camelcase';
// import { todoView } from './views/todo';
// import { chartsView } from './views/chart';
import { nbaGameView, nbaTeamView, nbaAllTeamsView, nbaAllGamesView } from './views/nba';

function enableRouting() {
  function setRoute() {
    $('.view').hide(); // hide - metoda jQuery
    const { hash } = window.location; // destrukturyzacja globalnego obiektu window.location
    if (hash === '') {
      $('#home').show();
    }
    $(hash).show(); // show - metoda jQuery
  }
  setRoute();
  window.addEventListener('hashchange', setRoute);
}

document.addEventListener('DOMContentLoaded', () => {
  // camelCaseView();
  // todoView();
  // chartsView();
  nbaGameView();
  nbaAllGamesView();
  nbaTeamView();
  nbaAllTeamsView();
  enableRouting();
});

// console.log('test');
