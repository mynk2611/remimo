## Setup Locally 

**Cloning the Repository**

```bash
git clone https://github.com/mynk2611/remimo.git
cd remimo
```

**Install the dependencies**

```bash
npm install
```

**Set up Environment Variables**

```bash
cd apps/user-app
copy .env.example .env
cd ../..
```

setup DB locally
```bash
cd packages/db
copy .env.example .env

now, write your connection string in DATABASE_URL

npx prisma migrate dev
npx prisma db seed 
npx prisma generate
```

** Run locally**
```bash
cd ../..
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
