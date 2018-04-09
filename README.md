# Real Time Traffic Predictions

In this project we aim to tackle the problem of traffic congestion by monitoring the
traffic flow and congestion and providing useful traffic congestion related information.
Congestion can be tackled either by increasing road network capacity or by decreasing
demand in congested areas, especially during peak hours. One of the major difficulties in
reducing congestion on the road network is that it is hard to change the mindset of travelers.
Travelling becomes an automatic and habitual process, and travelers are often unaware of
alternative means of getting from A to B.

The basic idea behind the project will be to use real time traffic updates for a period of time
and then understand the traffic patterns in the city. These patterns can be used to deduce a
number of conclusions. The conclusions that can be drawn using this data are:

    1. The locations in the cities where the traffic density is quite high
    2. The time of the day at which the traffic density in a particular location is high
    3. The zones in the city where the use of motor vehicles is prohibited
    4. The density of traffic in major zones of the city


## Info
---

1.  `backend` directory contains the flask backend with simple methods

2.  `front` directory contains the angular2 frontend

## Usage
---

1.  Clone the repo

    ```bash
    git clone --depth 1 https://github.com/avtansh-code/traffic-congestion.git
    cd traffic-congestion
    ```

2.  Import the sql file traffic.sql for the database related queries

3.  Install the backend related requirements and run. The following will start a flask-server on `localhost:8080`

    ```bash
    cd backend
    sudo pip install -r requirements.txt
    python run.py
    ```
4.  Install frontend related dependencies

    ```bash
    cd front

    # install global dependencies
    npm install webpack-dev-server rimraf webpack typescript -g

    # install webdriver-manager
    npm install webdriver-manager

    # install project related dependencies
    npm install

    # run server
    npm run server:dev:hmr
    ```

5.  Now navigate to `http://localhost:3000`

6. The login credentials will be provided by the project administrator

