import { 
  increaseCounter,
  decreaseCounter,
  counter,
  storeCreator,
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from './redux';

describe('redux', () => {
  
  it('should have the correct INCREASE_COUNTER constant',  () => {
    expect(INCREASE_COUNTER).toEqual('INCREASE_COUNTER');
  });

  it('should have the correct DECREASE_COUNTER constant',  () => {
    expect(DECREASE_COUNTER).toEqual('DECREASE_COUNTER');
  });

  it('should have create correct increase counter action',  () => {
    expect(increaseCounter).toEqual({ type: INCREASE_COUNTER });
  });

  it('should have create correct decrease counter action',  () => {
    expect(decreaseCounter).toEqual({ type: DECREASE_COUNTER });
  });

  it('should return 0 for an unknown action', () => {
    expect(counter(undefined, { type: 'hello' })).toEqual(0);
  });

  it('should increase counter when an increase action is passed in', () => {
    expect(counter(2, increaseCounter)).toEqual(3);
  });

  it('should decrease counter when an increase action is passed in', () => {
    expect(counter(20, decreaseCounter)).toEqual(19);
  });

  it('should return a new store', () => {
    expect(storeCreator()).toBeDefined();
  });
});