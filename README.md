### Rydes Customer Profile Service

---

I've been going through Nest JS and built this as a quick way to get my hands dirty with it. I wanted a more fully fledged alternative to Express. Express always felt like a bunch of packages thrown together. Plus, I like the fact that is has first class Typescript support.

It makes use of a MongoDB database while I am using Mongoose via the [@nestjs/mongoose](https://github.com/nestjs/mongoose "@nestjs/mongoose") wrapper as the ODM (Object Document Mapper) to interface with the underlying MongoDB collections. Its running on one of my side domains [https://bookble.themilestonesapp.xyz](https://bookble.themilestonesapp.xyz "https://bookble.themilestonesapp.xyz").

## Installation

Clone the project and cd into the application directory. Create and copy over the relevant environment variables from the .env.example file with

```
$ cat .env.example > .env
```

Make sure to update the relevant environment variables. I think they are descriptive enough, but if you need clarification, feel free to reach out.
Install the project dependencies and start a local server with the following terminal commands:

```
$ npm i
$ npm run start:dev
```

Navigate to http://localhost:1337/ to access the application.

### Build

---

Alternatively, you can run the application as a Docker container. With this, there are two options. Run a production build of the application with Docker by running the following command

```
$ docker build -t customer .
```

This will make use of the Dockerfile in the root directory and build a "bookble" image on your system, the Docker host. Alternatively, run a development build of the app with Docker with

```
$ docker build -t customer Dockerfile.dev
```

This makes use of the development Dockerfile (Dockerfile.dev) as opposed to the default Dockerfile. Ideally, you typically want to do this in a multi service setup with a docker-compose.yml file with volumes linked so as to develop locally.

Create and run a Docker container based on the bookble image created with

```
$ docker run -p 1337:1337 --name customer -d customer
```

Once this is done, you can access the application via your local IP address on the 1337 port. So say your local IP address is http://192.168.43.127/, it would be available at http://192.168.43.127:1337. Its accessed on the 1337 port due to the port mapping specified with the docker run command. Run it on a different port of your choosing by simply specifying a different port after the -p option. So to run it on port 5000, it would simply be

```
$ docker run -p 5000:1337 --name customer -d customer
```
