import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {

  it('should render APP pages heading', () => {

    render(<App />)

    expect(screen.getByText('APP pages'))
      .toBeInTheDocument()

  })

  it('welcome should be hidden initially', () => {

    render(<App />)

    const welcome = screen.getByText('welcome')

    expect(welcome).toHaveStyle({
      display: 'none'
    })

  })

  it('should display welcome when button clicked', async () => {

    const user = userEvent.setup()

    render(<App />)

    const button = screen.getByRole('button', {
      name: 'Click me'
    })

    await user.click(button)

    const welcome = screen.getByText('welcome')

    expect(welcome).toHaveStyle({
      display: 'block'
    })

  })

})