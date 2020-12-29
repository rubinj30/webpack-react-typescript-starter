import { About } from './About';
import renderWithRouter from '../../testUtils/renderWithRouter';

describe('About', () => {
  it('should render', () => {
    renderWithRouter(<About />);
  });
});
