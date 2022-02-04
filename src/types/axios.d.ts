import axios from 'axios'; 

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $validate: (data: object, rule: object) => boolean
  }
}

export interface ComponentCustomProperties {};
