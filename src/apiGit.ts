import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

async function getUserFromGithub(user: string) {
  try {
    let result = await api.get(`/users/${user}`);
    console.log(result.data);
  } catch (error) {
    console.log('Usuario não existe');
  }
}
getUserFromGithub("Marseljrdev");
