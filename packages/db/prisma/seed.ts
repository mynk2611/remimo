import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient();

async function main() {
  const lala = await prisma.user.upsert({
    where: { number: "2323232323" },
    update: {},
    create: {
      number: "2323232323",
      password: await bcrypt.hash("lala12345", 10),
      name: "lala",
      balance: {
        create: {
          amount: 10000,
          locked: 0
        }
      },
      onRamp: {
        create: {
          amount: 200000,
          status: "success",
          startDate: new Date(),
          provider: "HDFC Bank",
          token: "token_1"
        }
      }
    }
  })

  const robin = await prisma.user.upsert({
    where: { number: "2342342342" },
    update: {},
    create: {
      number: "2342342342",
      password: await bcrypt.hash("robin12345", 10),
      name: "robin",
      balance: {
        create: {
          amount: 10000,
          locked: 0
        }
      },
      onRamp: {
        create: {
          amount: 200000,
          status: "success",
          startDate: new Date(),
          provider: "HDFC Bank",
          token: "token_3"
        }
      }
    }
  })



  const mame = await prisma.user.upsert({
    where: { number: "3434343434" },
    update: {},
    create: {
      number: "3434343434",
      password: await bcrypt.hash("mame", 10),
      name: "mame",
      balance: {
        create: {
          amount: 20000,
          locked: 0
        }
      },
      onRamp: {
        create: {
          amount: 100000,
          status: "failure",
          startDate: new Date(),
          provider: "ICICI Bank",
          token: "token_2"
        }
      }
    },
  })
  console.log({ lala, mame })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
