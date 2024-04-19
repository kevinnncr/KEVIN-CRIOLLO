import { Component } from "react";

interface ProductionStatusState {
  currentStatus: string;
}

class ProductionStatus extends Component<{}, ProductionStatusState> {
  interval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentStatus: "En espera",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newStatus = this.state.currentStatus === "En espera" ? "En proceso" : "En el horno";
      this.setState({ currentStatus: newStatus });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <h2>Estado de Producción de Pan:</h2>
        <p>{this.state.currentStatus}</p>
      </div>
    );
  }
}

export default ProductionStatus;
