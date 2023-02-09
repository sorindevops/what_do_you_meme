import React from "react";

import PlayerHand from "./PlayerHand";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PlayerHand",
  component: PlayerHand,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PlayerHand {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "PlayerHand",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "PlayerHand",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "PlayerHand",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "PlayerHand",
// };
