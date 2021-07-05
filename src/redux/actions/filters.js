import { SET_SORT_BY, SET_CATEGORY } from "../reducers/filters"

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy
})

export const setCategory = (sortBy) => ({
  type: SET_CATEGORY,
  payload: sortBy
})