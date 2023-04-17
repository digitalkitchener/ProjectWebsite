/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleOverridesProps = {
    Article?: PrimitiveOverrideProps<FlexProps>;
    "Blog Info"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "a-badge"?: PrimitiveOverrideProps<FlexProps>;
    Title210122013?: PrimitiveOverrideProps<TextProps>;
    "Short Info"?: PrimitiveOverrideProps<FlexProps>;
    "a-author"?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Para210122018?: PrimitiveOverrideProps<FlexProps>;
    Article210122019?: PrimitiveOverrideProps<TextProps>;
    Para210122020?: PrimitiveOverrideProps<FlexProps>;
    Title210122021?: PrimitiveOverrideProps<TextProps>;
    Article210122022?: PrimitiveOverrideProps<TextProps>;
    Para210122023?: PrimitiveOverrideProps<FlexProps>;
    Title210122024?: PrimitiveOverrideProps<TextProps>;
    Article210122025?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArticleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ArticleOverridesProps | undefined | null;
}>;
export default function Article(props: ArticleProps): React.ReactElement;
