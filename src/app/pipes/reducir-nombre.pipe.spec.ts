import { ReducirNombrePipe } from './reducir-nombre.pipe';

describe('ReducirNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new ReducirNombrePipe();
    expect(pipe).toBeTruthy();
  });
});
