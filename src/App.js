import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalClick from './components/FuntionalClick';
import CLassClick from './components/ClassCLick';
import EventBinding from './components/EventBinding';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './components/appStyle.css';
import style from './components/appStyle.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import ClassCounter from './components/hook/ClassCounter';
import HookCounter from './components/hook/HookCounter';
import HookCounterThree from './components/hook/HookCounterThree';
import HookCounterFour from './components/hook/HookCounterFour';
import HookCounterTwo from './components/hook/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterFour />
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter />
      <ClassCounter /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">AppStyle</h1>
      <h1 className={style.success}>AppStyleModule</h1>
      <Inline />
      <StyleSheet primary={true} />
      <NameList /> */}
      {/* <ParentComponent /> 
      <UserGreet /> */}
      {/* <FunctionalClick />
      <CLassClick />
      <EventBinding /> */}
      {/* <Counter />
      <Greet name="Bao" heroName="Bao hero" />

      <Welcome  name="Thuy" heroName="Thuy Hero" />
     <Hello /> */}
    </div>
  );
}
export default App;
