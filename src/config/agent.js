export default  {
    "type": process.env.AGENT_TYPE, 
    "project_id": process.env.AGENT_PROJECT_ID,
    "private_key_id": process.env.AGENT_PRIVATE_KEY_ID,
    "private_key": process.env.AGENT_PRIVATE_KEY,
    "client_email": process.env.AGENT_CLIENT_EMAIL,
    "client_id": process.env.AGENT_CLIENT_ID,
    "auth_uri": process.env.AGENT_AUTH_URI,
    "token_uri": process.env.AGENT_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AGENT_AUTH_PROVIDER_URL,
    "client_x509_cert_url": process.env.AGENT_CLIENT_CERT_URL
}
  