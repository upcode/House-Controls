#  **README**


# jQuery Smart Control4's Home

## Synopsis
Constructed a jQuery application simulating house automation. Features includes turning on and off a light. A temperature control panel to regulate temperatue's of your home which also includes added features such as opening window, turning on a fan, or starting a fire. jQuery Smart Control4's Home is using Python, Flask and JavaScript. jQuery Smart Control4's Home renders control panel where user can interact with their home. .

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

