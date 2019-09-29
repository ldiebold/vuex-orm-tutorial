import { Admin } from './UserHierarchy'

export class SuperAdmin extends Admin {
  static entity = 'super_admins'

  static baseEntity = 'users'

  deleteServer() {
    console.log('deleting the server')
  }

  static fields() {
    return {
      ...super.fields()
    }
  }
}