import { JSONSchemaFaker } from 'json-schema-faker'

export default async () => {
  return await JSONSchemaFaker.resolve({
    $id: '123',
  })
}
