/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedCardOverridesProps = {
    FeaturedCard?: PrimitiveOverrideProps<ViewProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "a-badge"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Short Info"?: PrimitiveOverrideProps<FlexProps>;
    "a-author"?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeaturedCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturedCardOverridesProps | undefined | null;
}>;
export default function FeaturedCard(props: FeaturedCardProps): React.ReactElement;
