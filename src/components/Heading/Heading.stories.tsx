import { Meta, StoryObj } from "@storybook/react";
import { Children } from "react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsun.",
    size: "lg"
  },
  argTypes: {
    size: {
      options: ["lg", "xl", "2xl"],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};



export const XL: StoryObj<HeadingProps> = {
  args: {
    size: "xl"
  }
};

export const XXL: StoryObj<HeadingProps> = {
  args: {
    size: "2xl"
  }
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>
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
