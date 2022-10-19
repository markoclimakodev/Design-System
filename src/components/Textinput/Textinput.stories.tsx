import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./Textinput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/Textinput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.InputIcon>
        <Envelope/>
      </TextInput.InputIcon>,

      <TextInput.Input placeholder="Type your e-mail address" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  }
};
