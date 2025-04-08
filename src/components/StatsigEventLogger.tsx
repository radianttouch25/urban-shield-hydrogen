import { useStatsigClient } from "@statsig/react-bindings";
import { Button } from "@/components/ui/button";

interface StatsigEventLoggerProps {
  eventName: string;
  eventValue?: string;
  eventMetadata?: Record<string, string | number | boolean>;
  buttonText?: string;
  className?: string;
}

export function StatsigEventLogger({
  eventName,
  eventValue,
  eventMetadata,
  buttonText = "Log Event",
  className,
}: StatsigEventLoggerProps) {
  const { client } = useStatsigClient();

  const handleClick = () => {
    if (client) {
      client.logEvent(eventName, eventValue, eventMetadata);
      console.log(`Logged Statsig event: ${eventName}`, { eventValue, eventMetadata });
    } else {
      console.error("Statsig client not available");
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      className={className}
      variant="outline"
    >
      {buttonText}
    </Button>
  );
}
