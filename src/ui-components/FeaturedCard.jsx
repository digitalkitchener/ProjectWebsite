/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function FeaturedCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1216px"
      height="664px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeaturedCard")}
      {...rest}
    >
      <Image
        width="100%"
        height="90.36%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="9.64%"
        left="0%"
        right="0%"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="598px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="54.22%"
        bottom="0%"
        left="5.26%"
        right="45.56%"
        border="1px SOLID rgba(232,232,234,1)"
        boxShadow="0px 12px 24px rgba(0.0941176488995552, 0.10196078568696976, 0.16470588743686676, 0.11999999731779099)"
        borderRadius="12px"
        padding="39px 39px 39px 39px"
        backgroundColor="rgba(255,255,255,1)"
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
            fontSize="36px"
            fontWeight="600"
            color="rgba(24,26,42,1)"
            lineHeight="40px"
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
    </View>
  );
}
