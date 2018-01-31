// 导入元数据支持
import 'reflect-metadata'

// 存放所有可以被作为依赖项的类
const classPool: Function[] = []

export function injectable(constructor: Function) {
    // 通过反射机制，获取参数类型列表
    const paramsTypes: Function[] = Reflect.getMetadata('design:paramtypes', constructor)
    console.log(paramsTypes)
    if (classPool.indexOf(constructor) !== -1) {
        return
    } else if (paramsTypes.length) {
        paramsTypes.forEach((v, i) => {
            if (v === constructor) {
                throw new Error('不可以依赖自身')
            } else if (classPool.indexOf(v) === -1) {
                throw new Error(`依赖${i}[${(v as any).name}]不可被注入`)
            }
        })
    }
    classPool.push(constructor)
}
// 创建实例
export function create<T>(constructor: { new(...args: any[]): T }): T {
    // 通过反射机制，获取参数类型列表
    const paramsTypes: Function[] = Reflect.getMetadata('design:paramtypes', constructor)
    // 实例化参数列表
    const paramInstances = paramsTypes.map((v, i) => {
        // 参数不可注入
        if (classPool.indexOf(v) === -1) {
            throw new Error(`参数${i}[${(v as any).name}]不可被注入`)
            // 参数有依赖项则递归实例化参数对象
        } else if (v.length) {
            return create(v as any)
            // 参数无依赖则直接创建对象
        } else {
            return new (v as any)()
        }
    })
    return new constructor(...paramInstances)
}
