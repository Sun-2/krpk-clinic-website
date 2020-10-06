import { ProgressIndicator } from "../index";

export default {
  title: "Progress Indicator",
  decorators: [
    (Story) => (
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = ProgressIndicator;
