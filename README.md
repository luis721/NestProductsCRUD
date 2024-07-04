0. Make sure you're running PostgreSQL 15.1
   For this you may use `Docker`, `Supabase`, or install it directly in your computer.
   Once you've got PostgreSQL up and running, put the
   credentials in the `.env` file, following the schema of `.env.example`.
1. Install nvm https://nodejs.org/en/download/package-manager
2. Run `nvm use` so that you're using the proper `node` version.
3. Install `yarn v1.22.19`.
4. Run `yarn --frozen-lock` to install dependencies.
5. Run `yarn start:dev` to start the project in development mode.
6. Now you can access the endpoints, with `curl`, `Postman`, or whatever tool you prefer. Also, you may see the API docs here http://localhost:3000/api-docs
