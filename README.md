# Second-assesment-mir
# First part: build Resfull Api
# To start the server: npm run dev
# Endpoints

| Description | Route |
| ------------- | ------------- |
| Login | http://localhost:4000/api/login  |
```
Body login:
{
	"email": "maday@gmail.com",
	"password": "Maday#987"
}
```
| Description | Route |
| ------------- | ------------- |
| Get all list of favorites  | http://localhost:4000/api/favs  |
| Get one favorite  | http://localhost:4000/api/favs/:id  |
| Delete one favorite  | http://localhost:4000/api/favs/:id  |
| Create favorite  | http://localhost:4000/api/favs  |
```
Body favorite list:
{
	"name": "Lista prueba",
	"favs": {
		"title": "video",
		"description": "video test",
		"link": "https://video.com"
    }
}
```

# variables de entorno
```
MONGO_URI = mongodb://madays:madays@fav-shard-00-00.ckbnd.mongodb.net:27017,fav-shard-00-01.ckbnd.mongodb.net:27017,fav-shard-00-02.ckbnd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-10a5jy-shard-0&authSource=admin&retryWrites=true&w=majority
PORT = 4000
JWT_KEY = 'my_secret_key'
```
# Second part 
## Questions
1. Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

- Dominio: https://backend.mega-app.com.co
- Endpoint: /api/articles/search?docid=1020&hl=en#dayone
- Query endpoint: docid=1020&hl=en

2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500
- ¿Qué es una web API?
Es servicio basado en http
- ¿Qué es Restful?
Es un servicio web basado en Rest
- ¿Qué es statusCode 200?
Good
- ¿Qué es statusCode 400?
You messed up
- ¿Qué es statusCode 500?
Server broken

3. When we talk about CRUD, what does it mean?
C: create
R: Read
U: Update
D: Delete


