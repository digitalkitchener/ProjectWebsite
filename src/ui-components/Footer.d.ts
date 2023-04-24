/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    About21474228?: PrimitiveOverrideProps<FlexProps>;
    About21474229?: PrimitiveOverrideProps<TextProps>;
    Desciption?: PrimitiveOverrideProps<TextProps>;
    Contact21474231?: PrimitiveOverrideProps<FlexProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    Phone?: PrimitiveOverrideProps<TextProps>;
    Link21474234?: PrimitiveOverrideProps<FlexProps>;
    "Quick Link21474235"?: PrimitiveOverrideProps<FlexProps>;
    "Quick Link21474236"?: PrimitiveOverrideProps<TextProps>;
    "Link List"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    About21474239?: PrimitiveOverrideProps<TextProps>;
    Blog?: PrimitiveOverrideProps<TextProps>;
    Archived?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    Contact21474243?: PrimitiveOverrideProps<TextProps>;
    Category21474244?: PrimitiveOverrideProps<FlexProps>;
    Category21474245?: PrimitiveOverrideProps<TextProps>;
    "Category List"?: PrimitiveOverrideProps<FlexProps>;
    Lifestyle?: PrimitiveOverrideProps<TextProps>;
    Technology?: PrimitiveOverrideProps<TextProps>;
    Travel?: PrimitiveOverrideProps<TextProps>;
    Business?: PrimitiveOverrideProps<TextProps>;
    Economy?: PrimitiveOverrideProps<TextProps>;
    Sports?: PrimitiveOverrideProps<TextProps>;
    "m-newsletter"?: PrimitiveOverrideProps<FlexProps>;
    Copyright?: PrimitiveOverrideProps<FlexProps>;
    "Copyright Info"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    MetaBlog?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 JS Template 2023. All Rights Reserved."?: PrimitiveOverrideProps<TextProps>;
    Link21474260?: PrimitiveOverrideProps<FlexProps>;
    "Terms of Use"?: PrimitiveOverrideProps<TextProps>;
    Divider21474262?: PrimitiveOverrideProps<IconProps>;
    "Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
    Divider21474264?: PrimitiveOverrideProps<IconProps>;
    "Cookie Policy"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
