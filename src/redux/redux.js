//people dropping off a form (action creator)
const createPolicy = (name, amount) => {
  return { //return action ( a form in analogy)
    type: 'CREATE_POLICY',
    payload: { //info on type. instead of hardcoding like name: 'ali', we pass them in as arguments
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoney: amountOfMoneyToCollect
    }
  }
}

//3 reducers (for claims history, accounting and policies department)
//Reducers (deparments)

const claimsHistory = (oldListOfClaims = [], action) => { //reducers have 2 arguments, first is whatever they already have (if nothing then use default of []),
  //second is updated list of claims depending on an action which is passed in. (action is like form)
  //reducer needs to lok at form and see if its a type it cares about. if yes modify oldListOfClaims, if no return oldListOfClaims as it was
  if (action.type === 'CREATE_CLAIM') {
    //we care about this action (form!)
    //oldListOfClaims.push(action.payload) <-- doesnt make new array, just modifying
    return [...oldListOfClaims, action.payload]; //takes array of oldListOfClaims and add them to a new array, then add in extra element of action.payload in new array
  }
  //dont care about action (form!)
  return oldListOfClaims;
}

const accounting = (currentMoneyBag = 100, action) => { //company initially has 100
  if (action.type === 'CREATE_CLAIM') {
    return currentMoneyBag - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return currentMoneyBag + action.payload.amount;
  }
  return currentMoneyBag;
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter ((name) => name !== action.payload.name);
  }
  return listOfPolicies;
}



const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});
//store contains references to all the reducers and state/data produced by them
const store = createStore(ourDepartments);
//store contains dispatch function (form receiver to pass copies to all departments)

const action = createPolicy('Ali', 20);

store.dispatch(action); ///this action is forwarded off to every reducer/department
store.dispatch(createPolicy('ben', 30));
store.dispatch(createPolicy('cat', 40));
store.dispatch(createClaim('Ali', 120)); //--> 70 is money left
console.log(store.getState()); //getState() gives access to all info on all departments




//Action Creator  --> Action   --> Dispatch      --> Reducers    --> State
//Person dropping --> the form --> form receiver --> Departments --> Compiled department data
//of form