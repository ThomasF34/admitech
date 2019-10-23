#!/bin/bash

eval "$(ssh-agent -s)"
chmod 600 ./deploy.key
ssh-add ./deploy.key
ssh-keyscan igpolytech.fr >> ~/.ssh/known_hosts
git remote add deploy dokku@igpolytech.fr:admitech-back
git config --global push.default simple
git push deploy master