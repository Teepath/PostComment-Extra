export const GET_CATEGORIES = "GET_CATEGORIES";

export const GET_CATEGORY = "GET_CATEGORY";


export const receivedCategories = (categories)=>{

  return {
  type: GET_CATEGORIES,
    categories
  }
}


