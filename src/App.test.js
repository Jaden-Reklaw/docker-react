import { render, screen } from '@testing-library/react';
import Home from './pages/Home/Home.component';
import Invertebrates from './pages/Invertebrates/Invertebrates.component';
import Vertebrates from './pages/Vertebrates/Vertebrates.component';
import Others from './pages/Others/Others.component';

test('Home Page Text', () => {
  render(<Home />);
  const text = screen.getByText(/Welcome to the Animal Kingdom/i);
  expect(text).toBeInTheDocument();
});

test('Invertebrates Page Text', () => {
  render(<Invertebrates />);
  const text = screen.getByText(/Invertebrates/i);
  expect(text).toBeInTheDocument();
});

test('Vertebrates Page Text', () => {
  render(<Vertebrates />);
  const text = screen.getByText(/Vertebrates/i);
  expect(text).toBeInTheDocument();
});

test('Others Page Text', () => {
  render(<Others />);
  const text = screen.getByText(/Others/i);
  expect(text).toBeInTheDocument();
});


