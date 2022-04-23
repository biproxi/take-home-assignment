import Table from '../src/components/Table/Table'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {screen} from "../src/utils/test-utils/render";

describe('Table', function () {
  it('should render a table', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByRole('table')
    expect(received).toBeInTheDocument()
  })
  it('should have a Status header', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByText('Status')
    expect(received).toBeInTheDocument()
  })
  it('should have a Title header', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByText('Title')
    expect(received).toBeInTheDocument()
  })
  it('should have a Created At header', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByText('Created At')
    expect(received).toBeInTheDocument()
  })
  it('should have a Last Updated header', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByText('Last Updated')
    expect(received).toBeInTheDocument()
  })

  it('should have a table with data', function () {
    render(<Table data={'</>'} headers={["Status", "Title", "Created At", "Last Updated", ""]} title={'this is table'}/>)
    const received = screen.getByText('</>')
    expect(received).toBeInTheDocument()
  })
})
