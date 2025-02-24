# Toters do Bem Web App


## 1. Overview

Connecting volunteers and institutions to strengthen Rio Grande do Sul by offering help and hope to those affected by floods. This includes providing services such as psychological support, social education, and the assistance of volunteers.


## 2. Context

Our web application started its development and creation process at 2024-01-29. Our grow has been stable since then and we face some scaling limitations.

Many organizations and potentials user are reaching us to use our services and we expect anstady grow the current year Sat Feb 22 02:20:38 PM -03 2025.

The new web application must meet our business goal and correct most of the technicals issues faced previously.


## 3. Goals and Non-Goals

### 3.1. Goals

* Scalability: An architechture that can support a growing team of contibutors and stakeholders and icreasing number of users as well.

* Performance: Optimize the application aiming faster loading times and smooth user interactions over poor networks and mobile devices.

* Accessibility: Ensure compliance with WCAG accessibility standards to all users.


### 3.2. Non-Goals

* Native Mobile App: Our project is scoped to the web.

* Backend Overhaul: This project has the basic functionalitiy and can be refactored some how in the future as our requirements changes.

* Third Party Integration: Our project has no interests to impement integrations to third party systems/libraries or systems.


## 4. High Level Design

We're going to build the Toters do Bem Web Application as a monolothic server-side rendered React app using Next.js. Like other app clients, our web app will communicate wit the core database and any external services using the existing Core API.


### 4.1. Architectural Style

* Component-Based Architecture: Utilize a component-based architecture using React to create reusable UI components.

* Server-Side Rendered Application: Use Next.js for server-side rendering, static site generation, and improved performance.

* Monorepo: Develop our frontend apps and packages in a monorepo to speed up development and remove friction when sharing code.

* TypeScript: Use TypeScript for type safety and better developer experience, while allowing gradual adoption to accommodate all team members.


### 4.2. Key Components
    
* To do: Think and complete using Figma

    
### 4.3. Technology 

* Frontend: React (existing), Next.js (existing)

* Backend: Node (existing), MySQL (existing)

* Deployment: GitHub Pages infrastructure


## 5. Alternatives 

### 5.1. Frontend

* Single Page Application (SPA) with React: While a client-side rendered SPA provides a smooth user experience, it lacks the page load performance and scalability benefits of server-side rendering offered by Next.

* Angular: Although some team members are familiar with Vue.js, the majority have experience with React and Next.js, making it a more suitable choice. Still offers great scalibility and performarce.


### 5.2. Backend

* Express: Offers power and performance but the tight deadline and lack of developer experience lean us to use Fastify.

* Django: Offers excellent power and robustness, the lean steep for their use makes it usuitable for our project.

### 5.3. Deployment

* Azure: As offers excellent scability and resilience, their adoption and complexity makes it very difficult to handle in the time scope.


## 6. Timeline

### 6.1. Discovery and Planning

### 6.2. Initial Development

### 6.3. Feature Development

### 6.4. Testing and Deployment


## 7. Risks and Open Questions

### 7.1. Risks

* Team Scaling: As the team triples in size, coordination and communication may become challenging.

* Performance Bottlenecks: Ensuring optimal performance for all users, especially on mobile devices, may require significant optimization efforts.
    
### 7.2. Open Questions

* Volunteers Back-office: Should we do implement all volunteers management activities in our system given the timeframe?

* Data Analitics: All data pipeline for profiling users and grow tendencies must be implemented in this project?


## 8. Appendix

### 8.1. References:

* [Figma UI Designs](https://www.figma.com/design/pJuqzQQmzssQB14akNntsV/TOTERS)

* [Architechtural Requirements Document](./docs/architechtural-requirements.md)

* [Domain Model](./docs/domain-model.md)
