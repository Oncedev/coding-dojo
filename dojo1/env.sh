apt-get install nodejs -y
apt-get install npm -y
npm config set registry http://registry.npmjs.org/
chdir=/vagrant npm install mocha -g
chdir=/vagrant npm install should
