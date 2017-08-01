import { state } from './../static/interface';
import initState from './../static/init-state';
export default class unit {
  private state: state
  private skill: Array<any>
  constructor(state) {
    //TODO:状态的层次问题
    this.state = Object.assign({}, initState,{})
  }
}
console.log(new unit({}))