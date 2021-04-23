interface IThemeObject {
  primary: string
  secondary: string
  textColor: string
  buttonColor: string
  buttonShadowColor: string
  linearButtonColor: string
  linearCircularColor: string
  linearDangerButtonColor: string
}

export interface ITheme {
  dark: IThemeObject
}
