import { render, screen } from '../src/utils/test-utils/render';
import {ToDoList} from '../src/components/ToDoList/ToDoList'
import '@testing-library/jest-dom'

describe('TodoList', () => {
  it('should render loading indicator', () => {
    render(<ToDoList />)

    const received = screen.getByText('Loading...')
    expect(received).toBeInTheDocument()
  })
})