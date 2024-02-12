import { gql } from "@apollo/client"

export const LIST_BLOG = gql(`query {
    blogs {
      data {
        id
        attributes {
          Title
          Banner{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }`)

  export const SINGLE_BLOG = gql(`query Blog($blogId: ID!) {
    blog(id: $blogId) {
      data {
        id
        attributes {
          Title
          Description
          Body
          Banner{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }`
  ) 
  
 
  export const LIST_ID = gql(`query {
    blogs {
      data {
        id
      }
    }
  }`)