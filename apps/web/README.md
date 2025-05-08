# Transportation Scheduling

### Table of Contents
- [Summary](#summary)
- [Needs](#needs)
- [ToDo](#todo)

## Summary
This is meant to be a scheduling software/application for school specific transportion. Whether it's for field trips, pickup/drop off, etc, users should be able to schedule a bus and driver.

## Needs
- Users can be Requester and/or Driver
- Requesters AND Drivers can make requests
- Google auth/single sign on
- Busses/vans should not be able to be double books
- Drivers should not be able to be double booked
- Trips with special requests like "Nurse Required"
- Dashboard for both admins and drivers
    - Day at a glance
        - Number of total trips today

## ToDo
- [ ] Design/Build Front End
    - [x] Calendar View
        - [x] Option for admins to cancel a trip
        - [x] Canceled trip view
            - [x] time/date
            - [x] canceled by
            - [x] reason
    - [x] Request form
    - [x] Request table
    - [ ] Individual request
        - [ ] Ability for admins to schedule a trip from request
        - [ ] Ability for admins to schedule a trip instantly 
    - [ ] Dashboard
        - [ ] Admin Dash
            - [ ] How many trips going out on that day
            - [ ] Alerts for cancelations or conflicts
        - [ ] Driver Dash
            - [ ] Quick view of schedule for that day
        - [ ] Requester Dash
            - [ ] Upcoming requested and scheduled trips
- [ ] Build schema
