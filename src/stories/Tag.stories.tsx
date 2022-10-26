import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "../components";

export default {
  title: "ReactComponents/Tag",
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Tag",
};

export const PrimarySM = Template.bind({});
PrimarySM.args = {
  children: "Tag",
  size: "sm",
};

export const PrimaryLG = Template.bind({});
PrimaryLG.args = {
  children: "Tag",
  size: "lg",
};
