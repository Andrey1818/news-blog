export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean
}

export interface quillConfig {
  toolbar: any[]
}

export type AlertType = "success" | "warning" | "danger"

export interface Alert {
  type: AlertType,
  text: string
}
