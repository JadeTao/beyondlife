import Log from './../service/log'
import { IAge, IArea, IPayload } from './../static/interface'

export default class Jade {

  public static born(area: IArea, name: string) {
    return new Jade(area, name)
  }
  public area

  private name: string
  private gender: string
  private age: IAge

  constructor(area: IArea, name: string) {
    // TODO:状态的层次问题
    this.name = name
    this.area = area
  }

}
