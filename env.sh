sudo apt-get install nodejs -y
sudo apt-get install npm -y
sudo npm config set registry http://registry.npmjs.org/
sudo chdir=/vagrant npm install mocha -g
sudo chdir=/vagrant npm install should