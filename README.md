Express JS Static Boilerplate
============================

Express.js 4.0 Static Boilerplate is a simple Node.js Server using static files and directories for quick quality development and/or production.

Features
-----------
- Static directory and files
- Server watch for changes (Nodemon)
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

To watch and run the Grunt.js task on any change to your main files "app.js, app.css"
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