export interface TranslationType {
    welcome: string;
    loading: string;
    error: string;
    success: string;
  }
  
  export interface Translations {
    [key: string]: TranslationType;
  }