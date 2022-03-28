#!/bin/bash
 sudo apt-get update 
 sudo apt-get upgrade 
 sudo apt-get install apache2
 sudo chmod -R 777 /var/www/html  
 sudo rm /var/www/html/index.html  
 sudo a2enmod rewrite
 sudo service apache2 restart
 echo "Post Install Setup Done !"