/*
 * @Author: fuheideMayuyu 
 * @Date: 2021-07-18 22:17:01 
 * @Last Modified by: fuheideMayuyu
 * @Last Modified time: 2021-07-18 22:36:33
 */
import {modules} from './modules'
type GetGetter<Module> = Module extends { getters: infer G } ? G : unknown

type GetGetters<Modules> = {
  [K in keyof Modules]: GetGetter<Modules[K]>
}

type YdGettes = GetGetters<typeof modules>
type Addprefix<P, K> = `${P & string}/${K & string}`
type GetSpliceKey<P, Module> = Addprefix<P, keyof Module>

type GetSpliceKeys<Modules> = {
  [K in keyof Modules]: GetSpliceKey<K, Modules[K]>
}[keyof Modules]

type GetFunc<T,A, B> = T[A & keyof T][B & keyof T[A & keyof T]]

type GetSpliceObj<T> = {
  [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}` ? GetFunc<T, A, B> : unknown
}

type ModuleGeters = GetSpliceObj<YdGettes>

type Getters = {
  [K in keyof ModuleGeters]: ReturnType<ModuleGeters[K]>
}

export {
  Getters
}
