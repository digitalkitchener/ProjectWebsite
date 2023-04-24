/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostCardOverridesProps = {
    PostCard?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ImageProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "a-badge"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Short Info"?: PrimitiveOverrideProps<FlexProps>;
    "a-author"?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PostCardOverridesProps | undefined | null;
}>;
export default function PostCard(props: PostCardProps): React.ReactElement;
