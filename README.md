# Admitech

![Logo admmitech](https://user-images.githubusercontent.com/32480223/67026906-f68d5280-f108-11e9-8d42-b9a836db4a4b.png)

Recrutment platform for IG & DO courses in Polytech Montpellier

Team : Lucas Gonçalves, Inès Missoum, Fatima Machhouri, Thomas Falcone, Raphael
Luciano, Martin Cayuelas

# Deploy

For information:
```
apps:create APP_NAME
apps:create test-APP_NAME

docker-options:add APP_NAME build --build-arg "DD_API_KEY=<datadog api key>"
docker-options:add test-APP_NAME build --build-arg "DD_API_KEY=<datadog api key>"

config:set APP_NAME DD_API_KEY=<datadog api key>
config:set test-APP_NAME DD_API_KEY=<datadog api key>

proxy:ports-add APP_NAME http:80:3000
proxy:ports-add test-APP_NAME http:80:3000
```