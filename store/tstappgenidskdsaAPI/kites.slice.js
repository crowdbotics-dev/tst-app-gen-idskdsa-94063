import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kite_list = createAsyncThunk(
  "kites/api_v1_kite_list",
  async payload => {
    const response = await apiService.api_v1_kite_list(payload)
    return response.data
  }
)
export const api_v1_kite_create = createAsyncThunk(
  "kites/api_v1_kite_create",
  async payload => {
    const response = await apiService.api_v1_kite_create(payload)
    return response.data
  }
)
export const api_v1_kite_retrieve = createAsyncThunk(
  "kites/api_v1_kite_retrieve",
  async payload => {
    const response = await apiService.api_v1_kite_retrieve(payload)
    return response.data
  }
)
export const api_v1_kite_update = createAsyncThunk(
  "kites/api_v1_kite_update",
  async payload => {
    const response = await apiService.api_v1_kite_update(payload)
    return response.data
  }
)
export const api_v1_kite_partial_update = createAsyncThunk(
  "kites/api_v1_kite_partial_update",
  async payload => {
    const response = await apiService.api_v1_kite_partial_update(payload)
    return response.data
  }
)
export const api_v1_kite_destroy = createAsyncThunk(
  "kites/api_v1_kite_destroy",
  async payload => {
    const response = await apiService.api_v1_kite_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kitesSlice = createSlice({
  name: "kites",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_kite_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kite_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kite_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_kite_list,
  api_v1_kite_create,
  api_v1_kite_retrieve,
  api_v1_kite_update,
  api_v1_kite_partial_update,
  api_v1_kite_destroy,
  slice: kitesSlice
}
