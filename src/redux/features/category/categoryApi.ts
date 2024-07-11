import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createCategory:builder.mutation({
            query:(data) => ({
                url:'/category',
                method:'POST',
                body:data
                
            })
        }),
        getALlCategory:builder.query({
            query:() => ({
                url:'/category',
                method:'GET',
                
            })
        }),
        getSingleCategory:builder.query({
            query:(id) => ({
                url:`/category/${id}`,
                method:'GET',
                
            })
        })
    })
})

export const {useCreateCategoryMutation,useGetALlCategoryQuery,useGetSingleCategoryQuery,}=  categoryApi 