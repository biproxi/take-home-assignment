import { render, screen } from '../src/utils/test-utils/render';
import ArchivedList from '../src/components/ArchivedList/ArchivedList'
import '@testing-library/jest-dom'

describe('ArchivedList', () => {
  it('should render loading indicator', () => {
    render(<ArchivedList />)

    const received = screen.getByText('Loading...')
    expect(received).toBeInTheDocument()
  })
})