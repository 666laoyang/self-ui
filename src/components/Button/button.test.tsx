import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultprops = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'violet',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultprops}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    //直接获取网页上的dom
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('violetButton violetButton--default ')
    fireEvent.click(element)
    expect(defaultprops.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('violetButton--primary violetButton--lg violet')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" href="https://em.meituan.com/">
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('violetButton violetButton--link')
    expect(element).toHaveAttribute('href', 'https://em.meituan.com/')
  })

  it('should render disabled button', () => {
    const wrapper1 = render(<Button {...disabledProps}>Nice</Button>)
    const wrapper2 = render(
      <Button btnType="link" href="https://em.meituan.com/" disabled>
        Link
      </Button>
    )
    const element = wrapper1.getByText('Nice') as HTMLButtonElement
    const linkElement = wrapper2.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
    expect(linkElement).toHaveAttribute('href', 'javascript:void(0)')
  })
})
