import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sknISD4GPbNLBzMveFaFfB6wBcn9N2E9YvmQUxe0ezcM3KSuzvRkNyrH8FBs71vPlIOmuM8jnVhReCs1AIFqsRLitxAZJOSwPALsfMrhFm2QKjUMgWTOFc8jGYZZhvcdsKr1JTcjN1GyYCjbckoXqvrYm6epRp6LSkuL01PkWjuG1clf7QK3"
})
