/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PostCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="392px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(232,232,234,1)"
      borderRadius="12px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PostCard")}
      {...rest}
    >
      <Image
        width="360px"
        height="240px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ></Image>
      <Flex
        gap="20px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 8px 8px 8px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Heading")}
        >
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "a-badge")}
          ></Flex>
          <Text
            fontFamily="Work Sans"
            fontSize="24px"
            fontWeight="600"
            color="rgba(24,26,42,1)"
            lineHeight="28px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="The Impact of Technology on the Workplace: How Technology is Changing"
            {...getOverrideProps(overrides, "Title")}
          ></Text>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Short Info")}
        >
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "a-author")}
          ></Flex>
          <Text
            fontFamily="Work Sans"
            fontSize="16px"
            fontWeight="400"
            color="rgba(151,152,159,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="August 20, 2022"
            {...getOverrideProps(overrides, "Date")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
