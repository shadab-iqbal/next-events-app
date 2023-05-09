import { Fragment } from "react";

import EventsSearch from "@/components/events/events-search";
import EventList from "@/components/events/event-list.js";
import { getAllEvents } from "../../dummy-data.js";

export default function AllEventsPage() {
  const allEvents = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList list={allEvents} />
    </Fragment>
  );
}
