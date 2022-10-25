import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    text: "Lorem ipsum.",
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};
