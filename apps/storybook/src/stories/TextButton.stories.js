import { TextButton } from "@packages/ui";

const meta = {
  title: "UI/Button/TextButton",
  component: TextButton,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "link", "plain"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    text: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export default meta;

// 主要變體故事
export const Primary = {
  args: {
    variant: "primary",
    text: "Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    text: "Button",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    text: "Button",
  },
};

export const Link = {
  args: {
    variant: "link",
    text: "Button",
  },
};

export const Plain = {
  args: {
    variant: "plain",
    text: "Button",
  },
};

// 尺寸故事
export const Large = {
  args: {
    size: "large",
    text: "Button",
  },
};

export const Medium = {
  args: {
    size: "medium",
    text: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    text: "Small",
  },
};

// 狀態故事
export const Disabled = {
  args: {
    disabled: true,
    text: "Button",
  },
};

export const DisabledLink = {
  args: {
    variant: "link",
    disabled: true,
    text: "Button",
  },
};

export const DisabledPlain = {
  args: {
    variant: "plain",
    disabled: true,
    text: "Button",
  },
};

// 組合故事
export const AllVariants = {
  render: () => ({
    components: { TextButton },
    template: `
      <div class="space-y-4">
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Primary Variants</h3>
          <div class="flex space-x-2">
            <TextButton variant="primary" size="small" text="Small" />
            <TextButton variant="primary" size="medium" text="Medium" />
            <TextButton variant="primary" size="large" text="Large" />
          </div>
        </div>
        
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Secondary Variants</h3>
          <div class="flex space-x-2">
            <TextButton variant="secondary" size="small" text="Small" />
            <TextButton variant="secondary" size="medium" text="Medium" />
            <TextButton variant="secondary" size="large" text="Large" />
          </div>
        </div>
        
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Outline Variants</h3>
          <div class="flex space-x-2">
            <TextButton variant="outline" size="small" text="Small" />
            <TextButton variant="outline" size="medium" text="Medium" />
            <TextButton variant="outline" size="large" text="Large" />
          </div>
        </div>
        
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Link Variants</h3>
          <div class="flex space-x-2">
            <TextButton variant="link" size="small" text="Small" />
            <TextButton variant="link" size="medium" text="Medium" />
            <TextButton variant="link" size="large" text="Large" />
          </div>
        </div>
        
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Plain Variants</h3>
          <div class="flex space-x-2">
            <TextButton variant="plain" size="small" text="Small" />
            <TextButton variant="plain" size="medium" text="Medium" />
            <TextButton variant="plain" size="large" text="Large" />
          </div>
        </div>
      </div>
    `,
  }),
};