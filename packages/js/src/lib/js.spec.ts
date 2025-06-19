import { js } from './js.js';
import { describe, it, expect} from 'vitest'


describe('js', () => {
  it('should work', () => {
    expect(js('js')).toEqual('js');
  });
});
