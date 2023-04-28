/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import { FlexProps, IconProps, TextProps, ViewProps } from '@aws-amplify/ui-react'
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>
export declare type NavbarOverridesProps = {
  Navbar?: PrimitiveOverrideProps<FlexProps>
  'Frame 209'?: PrimitiveOverrideProps<FlexProps>
  Logo?: PrimitiveOverrideProps<FlexProps>
  Meta?: PrimitiveOverrideProps<IconProps>
  Blog21474187?: PrimitiveOverrideProps<IconProps>
  Union?: PrimitiveOverrideProps<IconProps>
  'Frame 208'?: PrimitiveOverrideProps<FlexProps>
  Menu?: PrimitiveOverrideProps<FlexProps>
  Item21474191?: PrimitiveOverrideProps<FlexProps>
  Home?: PrimitiveOverrideProps<TextProps>
  Item21474193?: PrimitiveOverrideProps<FlexProps>
  Blog21474194?: PrimitiveOverrideProps<TextProps>
  Item21474195?: PrimitiveOverrideProps<FlexProps>
  'Single Post'?: PrimitiveOverrideProps<TextProps>
  Item21474197?: PrimitiveOverrideProps<FlexProps>
  Pages?: PrimitiveOverrideProps<TextProps>
  Item21474199?: PrimitiveOverrideProps<FlexProps>
  Contact?: PrimitiveOverrideProps<TextProps>
  'Frame 207'?: PrimitiveOverrideProps<FlexProps>
  'atoms-input'?: PrimitiveOverrideProps<FlexProps>
  Swich?: PrimitiveOverrideProps<FlexProps>
  'Rectangle 14'?: PrimitiveOverrideProps<ViewProps>
  'Frame 205'?: PrimitiveOverrideProps<FlexProps>
  sunny?: PrimitiveOverrideProps<ViewProps>
  Vector?: PrimitiveOverrideProps<IconProps>
} & EscapeHatchProps
export declare type NavbarProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: NavbarOverridesProps | undefined | null
  }
>
export default function Navbar(props: NavbarProps): React.ReactElement
