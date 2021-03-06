import factory from './factory.js'
import controller from './controller.js'
import component from './component.js'

export default angular
  .module('firebase.paginator', [])
  .factory('$firebasePaginator', factory)
  .controller('FirebasePaginatorController', controller)
  .component('firebasePaginator', component);
