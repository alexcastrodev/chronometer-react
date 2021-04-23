import { FunctionComponent } from 'react'
import {
  NeutralButton,
  ActiveButton,
  InsideCircle,
  ButtonText,
  DangerButton,
} from './style'

interface IButton {
  label: string
  variant?: string
  onClick?: () => void
}

const children: FunctionComponent<string> = label => (
  <InsideCircle>
    <ButtonText>{label}</ButtonText>
  </InsideCircle>
)

const Button: FunctionComponent<IButton> = ({
  label,
  variant,
  onClick,
}: IButton) => {
  const rest = {
    onClick: onClick,
  }

  switch (variant) {
    case 'active':
      return <ActiveButton {...rest}> {children(label)}</ActiveButton>

    case 'danger':
      return <DangerButton {...rest}>{children(label)}</DangerButton>

    default:
      return <NeutralButton {...rest}>{children(label)}</NeutralButton>
  }
}

export default Button
