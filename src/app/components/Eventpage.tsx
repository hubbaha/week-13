"use client";
import React from "react";
import Card from "../components/Card";
import { getAllEvents } from "./Dummy";


function EventsPage() {
  const events = getAllEvents();
  
  console.log(events);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[80%] mx-auto my-9 space-y-5">
        {events.map((event) => (
          <Card key={event.id} id={event.id} title={event.title} dates={event.dates} image={event.image} location={event.location}/>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;