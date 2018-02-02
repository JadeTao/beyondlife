import Log from './../service/log'
import { IAge, IArea, IPayload } from './../static/interface'

export default class Jade {

  public static born(area: IArea, name: string) {
    return new Jade(area, name)
  }

  public state = {
    type: 'JADE',
    age: 0,
    birthTime: 0,
  }

  constructor(area: IArea, name: string) {
    console.log('hi')
  }

}
