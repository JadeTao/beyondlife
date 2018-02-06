import { IScript } from './static/interface'

// 游戏剧本
// TODO: DSL
const SCRIPT: IScript = {
  world: [{
    name: '魔多',
    continent: [{
      name: '中原',
      jade: [{
        name: 'apex',
        hero: true,
        ability: [],
      }, {
        name: 'hazo',
        hero: false,
        ability: [],
      }],
    }],
  }],
}

export default SCRIPT
