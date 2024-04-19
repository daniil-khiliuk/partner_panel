# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

Create image (in app directory):
    <p>docker build -t partners_panel .</p>
    
Create containe:
    <p>docker container run -p 8001:3000 --name partners_panel partners_panel</p>
* ...
