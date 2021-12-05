# docker-compose
My first push

Steps:

1. Application started with express and later will switch to hapijs
2. Remove networks from docker yaml file, re-arrange files inside dedicated folders.

   Container mongo  Running
   
   Container nodejsserver  Running

   Container nginx  Running

3. Replace express with HapiJs. Working GET endpoint and ruturning empty array, as expected.

4. Include React - static content.

5. Created login with savind username in store.

6. Add axios for http request to server.

7. Implement login to call GET form stored data. On 200 move to Home, on error display message.

8. Final commit with menu and aggregate time functionality

Next steps:
1. REACT: Change class approach to function approach -> newer and more modern
2. CSS: Add style to UI - now it looks primitive
3. Adapt routing to limmit acces as long as user is not connected
   - nginx to be used at full capabilities as proxy
4. BUG: with store: username is lost when redirecting as action from login - easier to be fixed when react function approach is in place
5. BUG: sometimes 200 empty responses are treated/cought in catch
6. MISSING FUNCT: POST not working due to cors - linked with nginx proxy
7. MISSING FUNC: aggregate time not working yet :)


Utils:
docker-compose up
docker-compose up --build --remove-orphans --force-recreate
docker-compose down



