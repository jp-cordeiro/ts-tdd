class LocalSavePurchases{
  constructor (private readonly cacheStore: CacheStore){

  }
}

interface CacheStore{

}

class CacheStoreSpy implements CacheStore{
  deleteCallsCount = 0
}

describe('LocalSavePurchases', () => {
 test('should not delete cash on sut.init', () => {
   const cacheStore = new CacheStoreSpy()
   new LocalSavePurchases(cacheStore)
   expect(cacheStore.deleteCallsCount).toBe(0)
 })
})
