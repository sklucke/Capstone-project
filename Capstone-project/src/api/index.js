const APIURL = "https://fakestoreapi.com/products"

export const fetchAllProducts = async () =>  {
    try {
      const response = await fetch(APIURL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response /GET books not ok");
      }
      const result = await response.json();
      if (result.error) {
        throw result.error;
      }
      return result;
    } catch (error) {
      console.error("There was an error /GET books", error);
    }
  };