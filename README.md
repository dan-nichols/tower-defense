# tower-defense (to be named better)
A dope tower defense game, yo.

# What you neeeeeed
## To run:

### Your favourite browser

### [Java Development Kit 1.8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or later
Make sure you can run it from anywhere.

Open a command prompt anywhere and type `java -version`. You should see something like below. The 1.8 is the important part.

```
java version "1.8.0_92"
Java(TM) SE Runtime Environment (build 1.8.0_92-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.92-b14, mixed mode)
```

## To develop

### [Git](https://git-scm.com/downloads)
This will let you clone the code from this github. A Git client like [Source Tree](https://www.sourcetreeapp.com/) is good cause you don't need to know the command line commands.

Clone this repository to somewhere that makes sense on your computer.


### An IDE or text editor - Pick your poison
* intelliJ IDEA - Mainly for java
* Netbeans IDE - Java & Javascript
* Atom - Lightweight, not bad for web
* Sublime Text - Lightweight, good for anything
* Brackets - New, very lightweight; purpose built for javascript

## For reference
* [The Phaser.io source code](https://github.com/photonstorm/phaser)
* [Phaser examples](https://github.com/photonstorm/phaser-examples/tree/master/examples)


# How to run

* Open up a command prompt window from the root folder of this project
  * `cd {where you saved this}\tower-defense`
* Run the app
  * `go.bat`
* Go to the following URL from a browser window
  * http://localhost:8080/
* Hot swapping works so you can make changes and just refresh the page to test them!
* If the URL above doesn't work, check the `/health` endpoint to make sure the app is UP
  * http://localhost:8080/health
