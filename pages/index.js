import EventList from "/components/events/event-list";
import { getFeaturedEvents } from "/dummy-data.js";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <EventList list={featuredEvents} />;
}
