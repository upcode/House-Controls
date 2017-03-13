#  **README**


# jQuery Smart Control4's Home

## Synopsis
I constructed a jQuery application simulating house automation.  jQuery Smart Control4’s Home provides a control panel enabling users to interact with their homes while they are away. One feature enables users to turn a light on and off. A temperature control panel regulates a home’s temperature. This panel includes the added features of enabling users to open a window, turn on a fan, or start a fire. jQuery Smart Control4’s Home uses Python, Flask, and JavaScript.
Project link:  http://jquerysmartcontrols.herokuapp.com/

#### What I learned
* 	I learned flexbox and how to create a web application without CSS framework, like bootstraom, semanticUI.
* 	I wireframed the application, and came up with the design and functionality.
* 	learned about jQuery animation.

#### What I built
* 	I wrote the entire code challenge from scratch without looking at previous examples.
* 	I started it simple with just a straightforward click feature that would show two different images.
* 	I first implemented the light switch. This has a feature that enables a user to click a button that toggles a “light bulb off” or a “light bulb on” picture. I used jQuery toggleClass to toggle the two different images. I removed the background from the images and then placed these images in a box with a black background. When a user clicks light switch the images two images toggle, thus gives an “on” or “off” effect.
* 	I later decided to use CSS to create my own light instead of the images. I created two circles, one with a transparent background image and another with a white background. I used CSS color gradient shadow to give a glowing effect to the light bulb. I then added a vertical line from the top of the circles to indicate a hanging light.
* 	I used the jQuerry toggle feature to change the background image color. I also used CSS to highlight green to show “on,” and red to show “off.”
* 	I built the temperature control panel. I used two div-boxes, one for the user input of the temperature and one for the “set” button.
*  A user can click the temperature up or down arrow in the input box, or they can type in a desired temp. Once a user clicks the “set” button, one of the components for “fan,” “fire,” or  “window” will animate. I programmed an “if else” conditional statement to represent when each component will animate.
*  I built the triangle roof in CSS. I looked at a toggle arrow tooltip and decided do something similar. But I made a large triangle instead. I took a square, and using transparent background effect, removed the other sides, leaving a triangle. I placed the triangle inside the div-box.
*  I built the window. Using a shade vector, I removed the background. When a user clicks a desired temperature, the shade will go up. I originally had a window behind the shade, but I was unable to get it to show up. I tried using jQuery to build the HTML window, and then using appendTo() method to attach it to the window div-box, I later tried the hide-show method, but ended up running out of time and so I just used the shade to give a window-opening effect.
*  I created four div-boxes using flex-box. Each of these div-boxes is a room in a house. I gave each room a different background color.
*  Using jQuery I placed each animation inside a box using the div-box ids.
*  I used jQuery to create the animation and then used appendTo() method to attach each animation to the DOM where the div-boxes live.




#### What I used
* CodePen: fire 

Fire: ttps://codepen.io/OfficialAntarctica/pen/JXVpgp.

For the heater effect I used fire CSS animation from CodePen. In my CSS file you will see where I clearly marked CodePen code for fire and fan.

* CodePen: fan 

Fan: http://codepen.io/zastrow/pen/uhzfl/

I originally had my own fan, but I was unable to get jQuery to animate the spinning.  I decided to use the CodePen fan effect instead so I could focus on other aspects of the application.

* Google fonts and Google images for background, favicon, and original lights.

* I Used Adobe color CC with application layout design colors
https://color.adobe.com/create/color-wheel/?copy=true

* I deployed it to heroku

#### What I focused on and why: 

I focused on functionality first and then getting the animation getting components to work properly. I then focused on the UI as I feel it is important for any application to have a design that works well and aesthetically pleasing. 

#### What you didn't get to and how you would approach/finish it:

*  I didn't get to finish the window that is behind the shade. 
*  Layout needs to be more responsive for all platforms and devices. 
*  I would have liked to use more jQuery animation than CSS.

#### If time permitted, I would have liked to:
* 	Create my own CSS fire/heater and my own fan instead of using third party tools. 
* 	Finish the mobile aspects of the layout.
* 	Spend more time calculating the CSS height and width dimensions of the layout. 
* 	Add more features to the temperature panel, stop button, and perhaps a sound effect or notification message. 


## Project
***jQuery Smart Control4's Home***
![Image of Yaktocat](https://github.com/upcode/House-Controls/blob/master/static/image/house.jpg?raw=true)


### Installing

Project includes Python files, jQuery files
*From command line make project `directory` and `cd` into that directory*

```shell
$ mkdir smartControl
$ cd smartControl
```
- To set up server, create a Sandbox
    - Add Python sandbox by creating a virtual environment
```shell
$ virtualenv env  # creates virtual sandbox environment
$ source env/bin/activate  # this activates your environment
(env)$ python  #(env) activates sandbox
```
#### Python Installing Libraries
- Once virtual sandbox is created, install `Flask` a light-weight framework, save environment configuration. It will be used later for deployment to `Heroku`.
#### Flask
```shell
(env)$ pip install flask # creates python framework
```
### Project Folder Structure
---**evn/**
---**static/**
----------**css/** `index.css`
----------**js/** `index.js`
---`server.py`
---`README.md`
---`requirements.txt`
---`.gitignore`

*In the shell, type the following to set up project directories and files*
```shell
(env)$ mkdir templates # holds templates for the view layer(HTML)
(env)$ mkdir static, css, js, data # static folder holds css, js and JSON files
(env)$ touch server.py # holds server code to run timeline program
```
#### Flask Save Env Config
- Next, save requirements by pip freeze
- `requirements.txt` make explicit, repeatable installation of packages. This creates a working set of packages that can be installed elsewhere. Requirements files lets person install exact versions, but it won’t tell what all the exact versions are.

*To create a new requirements file from a known working environment, use:*
```shell
(env)$ pip freeze > requirements.txt
```
## Getting Started
Please follow the [installation](#installation) instruction before getting started.
Information below follows python server code that sets up the sever. Execute the following Python code:

## Flask App

#### Python Server File
```python
import os
import sys
from flask import Flask, render_template
app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "<secretKEY>")
#-ROUTES---------------------------------------------------------------------------#
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/error")
def error():
    raise Exception("Error!")

#-HELPER FUNCTIONS--------------------------------------------------------------------#

if __name__ == "__main__":

    PORT = int(os.environ.get("PORT", 5000))
    DEBUG = "NO_DEBUG" not in os.environ

    app.run(debug=DEBUG, host="0.0.0.0", port=PORT)


```
#### Run Timeline App
*In terminal enter:*
```shell
(env)$ python server.py
Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## Deployment

Deployed to Heroku

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
# Documentation & Support
For more information, please visit:
**Flask:** [http://flask.pocoo.org/](http://flask.pocoo.org/)
**jQuery:** [https://jquery.com/](https://jquery.com//)
**Heroku:** [https://www.heroku.com/](https://www.heroku.com/)
**Fire:** [ttps://codepen.io/OfficialAntarctica/pen/JXVpgp](ttps://codepen.io/OfficialAntarctica/pen/JXVpgp)
**Fan:** [http://codepen.io/zastrow/pen/uhzfl/](http://codepen.io/zastrow/pen/uhzfl)



## License

This is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.


***
U.P.⇡[code] [http://umapetersen.com](http://umapetersen.com/ "Title")

