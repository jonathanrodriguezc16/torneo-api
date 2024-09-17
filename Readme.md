# Proyecto de API REST para Torneo de Fútbol

Esta es una ApiREST desarrollada con node.js express mongodb

## Requisitos

- Docker: [Instrucciones de instalación](https://docs.docker.com/get-docker/)
- Docker Compose: [Instrucciones de instalación](https://docs.docker.com/compose/install/)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/jonathanrodriguezc16/torneo-api.git
   
2. **Contruccion de el contenedor con el comando**

   ```bash
    docker-compose up --build
3. **Verificar que los contenedores están corriendo**

   ```bash
    docker-compose ps

4. **Para verificar los datos**

    docker exec -it torneo-api_db_1 mongo