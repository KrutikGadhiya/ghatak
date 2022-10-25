# Button Component

## **_List of props_**

```typescript

className?: string - additional css to be applied

disabled?: boolean - button is disabled or not - true | false

fullWidth?: boolean - whether the button has fullwidth or not - true | false

htmlType?: string - normal html button types - "button" | "submit" | "reset"

loading?: boolean - loading state for button - true | false

onClick?: () => void - for click behavour

prefix?: string | JSX-Element

rounded?: string - border radius of button - "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"

shape?: string - "default" | "rounded" | "pill"

size?: string - "lg" | "md" | "sm"

styles?: object - inline styles to be applied

suffix?: string | JSX-Element

type?: string  - button types - "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"

```

## **_Example_**

```typescript
import { Button } from "kk-react-components";

const App = () => {
  return (
    <div className="App">
      <Button type="primary">Hello World</Button>
    </div>
  );
};
```
