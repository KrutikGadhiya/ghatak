import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponents/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    // children:
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "hellostart",
  loading: false,
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Button",
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Button",
  loading: true,
};

export const PrefixAndSuffix = Template.bind({});
PrefixAndSuffix.args = {
  children: "Button",
  prefix: "hellostart",
  suffix: "helloend",
  loading: false,
  onClick: () => {
    alert("HI");
  },
};
