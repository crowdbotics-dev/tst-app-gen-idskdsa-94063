import axios from "axios"
const tstappgenidskdsaAPI = axios.create({
  baseURL: "https://tst-app-gen-idskdsa-94063.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstappgenidskdsaAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_hello_list(payload) {
  return tstappgenidskdsaAPI.get(`/api/v1/hello/`)
}
function api_v1_hello_create(payload) {
  return tstappgenidskdsaAPI.post(`/api/v1/hello/`, payload.data)
}
function api_v1_hello_retrieve(payload) {
  return tstappgenidskdsaAPI.get(`/api/v1/hello/${payload.id}/`)
}
function api_v1_hello_update(payload) {
  return tstappgenidskdsaAPI.put(`/api/v1/hello/${payload.id}/`, payload.data)
}
function api_v1_hello_partial_update(payload) {
  return tstappgenidskdsaAPI.patch(`/api/v1/hello/${payload.id}/`, payload.data)
}
function api_v1_hello_destroy(payload) {
  return tstappgenidskdsaAPI.delete(`/api/v1/hello/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tstappgenidskdsaAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tstappgenidskdsaAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return tstappgenidskdsaAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tstappgenidskdsaAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstappgenidskdsaAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstappgenidskdsaAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tstappgenidskdsaAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstappgenidskdsaAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return tstappgenidskdsaAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstappgenidskdsaAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return tstappgenidskdsaAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstappgenidskdsaAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tstappgenidskdsaAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_hello_list,
  api_v1_hello_create,
  api_v1_hello_retrieve,
  api_v1_hello_update,
  api_v1_hello_partial_update,
  api_v1_hello_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
