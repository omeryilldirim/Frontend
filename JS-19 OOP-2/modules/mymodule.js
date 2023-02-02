console.log("My Module Loaded")

export const CALISMA_SAATI = 40

export function topla(s1, s2) {
  return s1 + s2
}

let counter = 0

const inc = (miktar) => {
  counter += miktar
  return counter
}

const dec = (miktar) => {
  counter -= miktar
  return counter
}

const moduleName = "MY_MODULE"

export { inc, dec, moduleName }

export function selam() {
  console.log("Selamlar FS13")
}
//? Sadece bir tane export default'u olabilir.
// export default counter

export default function () {
  console.log("Elveda JS, Hoşgeldin React")
}
