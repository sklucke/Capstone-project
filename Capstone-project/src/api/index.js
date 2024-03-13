const APIURL = "https://fakestoreapi.com/products"
const BASE_URL = "https://fakestoreapi.com"

export const fetchAllProducts = async () =>  {
    try {
      const response = await fetch(APIURL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response /GET Products not ok");
      }
      const result = await response.json();
      if (result.error) {
        throw result.error;
      }
      return result;
    } catch (error) {
      console.error("There was an error /GET Products", error);
    }
  };


  export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`${APIURL}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("There was an error /GET single product", error);
    }
  }
    export const addProductToCart = async (body) => {
      try {
        const response = await fetch(`${BASE_URL}/carts`,{
          method:"POST",
          body:JSON.stringify(
             body
          )
      })
      const result = await response.json();
        return result;
      } catch (error) {
        console.error("There was an error/ ADD Cart", error);
      }
    }

    export const getAllUsers = async  (username) => {
      try {
        const response = await fetch(`${BASE_URL}/users`)
        const result = await response.json();
        const userData = result.find((user) => user.username === username)
        return userData;
      } catch (error) {
        console.error("Error /GET all USERS", error)
      }
    }

    export const getUserCart = async (id) => {
      try {
       const response = await fetch(`${BASE_URL}/carts/${id}`);
       const result = await response.json();
       return result.products;
      } catch (error) {
        console.error("Error /GET Single User", error)
      }
    }
  