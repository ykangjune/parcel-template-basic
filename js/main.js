console.log('Hello Parcel!')

async function test() {
  // async 비동기함수
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()