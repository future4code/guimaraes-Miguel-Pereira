export enum USER_TYPE  {
   TEACHER = 'Teacher',
   OPERATIONS = 'Operations',
   CX = 'CX'
}

export type user = {
   id: string
   name: string
   email: string
   type: USER_TYPE
}