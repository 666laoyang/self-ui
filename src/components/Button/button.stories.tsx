import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import Button from './button'

export default {
  title: '组件/Button 按钮',
  // title: '组件/通用/Button 按钮',
  component: Button,
} as Meta<typeof Button>

// template
const Template: StoryObj<typeof Button> = {
  render: args => <Button onClick={() => alert('click')} {...args}></Button>,
}

//default button
export const Default = {
  ...Template,
  args: {
    children: 'Default Button',
  },
}
Default.storyName = 'Defalut Button 默认按钮'

//primary Button
export const Primary = {
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button',
  },
}
Primary.storyName = 'Primary Button 主按钮'

//danger Button
export const Danger = {
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button',
  },
}
Danger.storyName = 'Danger Button 危险按钮'

//link Button
export const Link = {
  ...Template,
  args: {
    btnType: 'link',
    children: 'Link Button',
    href: 'https://google.com',
  },
}
Link.storyName = 'Link Button 链接按钮'

//dash button
export const DashButton = {
  ...Template,
  args: {
    btnType: 'dash',
    children: 'Dashed Button',
  },
}
DashButton.storyName = 'Dash Button 虚线按钮'

//Large Button
export const Large = {
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}
Large.storyName = 'Large Button 大按钮'

//small Button
export const Small = {
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}
Small.storyName = 'Small Button 小按钮'
