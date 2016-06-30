import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './socially.html';
import { name as PartiesList } from '../partiesList/partiesList';
import { name as Navigation } from '../navigation/navigation';
import { name as PartyDetails } from '../partyDetails/partyDetails';

class Socially {}

const name = 'socially';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PartiesList,
  PartyDetails,
  Navigation,
  'accounts.ui',
]).component(name, {
  template,
  controllerAs: name,
  controller: Socially,
})
.config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/parties');

}
