import bcrypt from "bcrypt";

const password = "Password@123";

async function generateHash() {
  try {
    const hash = await bcrypt.hash(password, 10);

    console.log("\nPassword:");
    console.log(password);

    console.log("\nHash:");
    console.log(hash);
  } catch (error) {
    console.error(error);
  }
}

generateHash();