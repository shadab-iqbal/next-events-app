import { useRouter } from "next/router";

import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();
  const queries = router.query.slug;

  if (!queries) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +queries[0];
  const filteredMonth = +queries[1];
  // these are all the conditions for being an invalid URL
  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear < 2000 ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    queries.length > 2
  ) {
    return (
      <ErrorAlert>
        <p> Invalid Parameters set. Please filter with correct values.</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (filteredEvents.length == 0) {
    return (
      <ErrorAlert>
        <p> No events found. Please search with different Parameters.</p>
      </ErrorAlert>
    );
  }

  return <EventList list={filteredEvents} />;
}
