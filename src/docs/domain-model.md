# Domain Model

## Entities

1. `User`
2. `Volunteer`
3. `Psychologist`
4. `Educator`


## Attributes and Operations

### `User`

* id: string
* name: string
* email: string
* cpf: string
* phone: string
* organization: string
* cnpj: string
* area: string
* address:
    * state: string
    * city: string
    * neighborhood: string
* notes: string
* password: string
* terms: boolean


### `Volunteer`

* id: string
* name: string
* email: string
* cpf: string
* birth_date: Date
* phone: string
* social_media: string
* certificate: string
* profession: string
* address:
    * state: string
    * city: string
    * neighborhood: string
* available_time
    * day: string
    * hour: string
* notes: string
* password: string
* terms: boolean

### `Psychologist`

* id: string
* name: string
* email: string
* cpf: string
* birth: Date
* phone: string
* rede_social: string
* crp: string
* specialization: string
* state: string
* available_time
    * day: string
    * hour: string
* notes: string
* password: string
* terms: boolean


### `Educator`

* id: string
* name: string
* email: string
* cpf: string
* birth: Date
* phone: string
* rede_social: string
* crp: string
* specialization: string
* state: string
* available_time
    * day: string
    * hour: string
* notes: string
* password: string
* terms: boolean

