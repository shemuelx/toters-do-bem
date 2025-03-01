# Architectural Requirements


## Business Goals

| Stakeholder                     | Goal                                                                                  |
|---------------------------------|---------------------------------------------------------------------------------------|
| Marianela (PM)                  | Increase number of volunteers, psychologist and educators by 100% in one year         |
| Nadi Duno (Front-end Developer) | Ship code to production confidently, without fear of breaking her teammate's features |
| Patricia (Compliance)           | Double the impact on a large portion of immigrants in Rio de Janeiro within one year  |
| Matondo (Volunteer)             | Receive care from a psychologist as soon as possible                                  |
| Samuel (Educator)               | Offer 3 hours of his time to help others                                              |
| Jani (User)                     | Visit our page to stay informed about the latest migrant information and services     |


## Quality Attributes

| Attribute     | Scenario                                                                                                      | Priority |
|---------------|---------------------------------------------------------------------------------------------------------------|----------|
| Performance   | A user on a mobile device with a 4G connection can load the app in 5 seconds or less.                         | High     |
| Scalability   | The codebase should be modularized to allow and increasing number of frontend developers to work in parallel. | High     |
| Accessibility | The app should comply with WCAG 2.2 accessibility standards.                                                  | Medium   |
| Performance   | Real-time updates should be broadcast to all listening clients within 15 seconds.                             | Low      |



