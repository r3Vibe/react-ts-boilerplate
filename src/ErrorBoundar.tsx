import { Component } from "react";

export class ErrorBoundary extends Component<any, { hasError: boolean }> {
  constructor(props: Object) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
