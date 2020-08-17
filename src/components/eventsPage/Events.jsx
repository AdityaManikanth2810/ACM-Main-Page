import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import "./Events.css";
import {eventData} from "./Events_Data";

export default function Events() {

    const [event,setEvent] = useState({});
    let { id } = useParams();

    useEffect( () => {
        const result = eventData.filter(event => event.id === id)[0]
        setEvent(result);

    });

    const RenderChiefGuestList = (chiefGuestList) =>
        chiefGuestList.map((chiefGuest) => (
            <div key={chiefGuest.id} className="eachGuest">
                <h2>{chiefGuest.name}</h2>
                <h4>{chiefGuest.details}</h4>
            </div>
        ));

    const RenderCoordinatorsList = (coordinatorsList) => {
        return coordinatorsList.map((coordinator, index) => (
            <div key={index} className="eachCoordinator">
                <h2>{coordinator.name}</h2>
                <p>{coordinator.contact}</p>
            </div>

        ));
    }

    return (
        <div className="events">
            <div className="poster" style={{backgroundImage: `url(${event.poster})`}}/>
            <div className="details">
                <div className="aboutVenue">
                    <div className="eachDetail">
                        <h4>What</h4>
                        <h1>{event.what}</h1>
                    </div>
                    <div className="eachDetail">
                        <h4>Where</h4>
                        <h1>{event.where}</h1>
                    </div>
                    <div className="eachDetail">
                        <h4>When</h4>
                        <h1>{event.when}</h1>
                    </div>
                </div>
                <div className="eventDetails">
                    <div className="aboutEvent">
                        <h4>{event.upcoming ? `What is it about ??` : `Event Summary`}</h4>
                        <p>{event.aboutEvent}</p>
                    </div>
                    <div className="chiefGuests">
                        <h4>{event.chiefGuests ? (event.chiefGuests.length === 1 ? `Chief Guest/Speaker` : `Chief Guests/ Speakers`) : null}</h4>
                        {event.chiefGuests ? RenderChiefGuestList(event.chiefGuests) : null}
                    </div>
                </div>
                <div className="contactDetails">
                    {
                        event.coordinators ?
                            <h2>Have a question ?</h2>
                            : null
                    }
                    {
                        event.coordinators ?
                            <div className="coordinators">
                                {RenderCoordinatorsList(event.coordinators)}
                            </div>
                            : null
                    }
                </div>
            </div>

        </div>
    );
}
