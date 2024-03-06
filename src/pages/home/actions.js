import axios from "axios";

// export function getProducts() {
//   axios
//     .get("https://db.test.arodos.com")
//     .then((res) => console.log("res", res))
//     .catch((e) => console.log("e", e));
// }

export async function getHospitals(callback) {
  try {
    let res = await axios.get("https://db.test.arodos.com/records/packages");
    console.log("res", res);
    callback(res.data.records, false);
  } catch (e) {
    console.log("e", e);
    callback([], true);
  }
}
