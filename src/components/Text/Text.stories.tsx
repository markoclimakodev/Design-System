import { Meta, StoryObj } from "@storybook/react";
import { Children } from "react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsun.",
    size: "md",
    color: 'gray-100'
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md"],
      control: {
        type: "inline-radio"
      },
      color: {
        options: ["gray-100", "gray-400"],
        control: {
          type: "inline-radio"
        }
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: "xs"
  }
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm"
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};
