Express JS Static Boilerplate
============================

ExpressJS static boilerplate is a simple NodeJS Server using static files and directories for quick quality development and production.

History
-----------
I wrote more than two Web Apps using NodeJS as a server so here's why I did the boilerplate.

Features
-----------
- Static directory and files
- Server monitor (nodemon)
- Grunt JS (Files Watch, CSS min, JS uglify)
- no Jade

Usage
-----------
On your terminal.

Install the node packages.
```ruby
sudo npm install
```

Run the server
```ruby
nodemon server.js
```

To watch and build the minify and uglify automatic right after you do any change to your main files "app.js, app.css"
```ruby
grunt watch
```

Want to do manually?! no problem.
```ruby
grunt build
```

Open your browser on the address 'localhost:3000'

Done!

Author
-----------
Michael Lancaster

License
-----------
MIT