interface Window {
  paypal: {
    HostedButtons: (options: { hostedButtonId: string }) => {
      render: (selector: string) => void;
    };
  };
}
